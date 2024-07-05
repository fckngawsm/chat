import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('ChatGateway');
  private connectedUsers: number = 0;

  afterInit() {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.connectedUsers--;
    this.logger.log(`Client disconnected: ${client.id}`);
    this.server.emit('usersOnline', this.connectedUsers);
  }

  handleConnection(client: Socket) {
    this.connectedUsers++;
    this.logger.log(`Client connected: ${client.id}`);
    this.server.emit('usersOnline', this.connectedUsers);
  }
}
