import { Check, Checks } from "@phosphor-icons/react";
import {
  ChatDialogDate,
  ChatDialogGeneralWrapper,
  ChatDialogMessageDate,
  ChatDialogMessageItem,
  ChatDialogMessageStatus,
  ChatDialogMessageWrapper,
} from "./styled";

export const ChatDialogMessage = () => {
  const isMyMessage = true;
  const MessageIsRead = true;
  return (
    <ChatDialogGeneralWrapper>
      <ChatDialogDate>19 июня</ChatDialogDate>
      <ChatDialogMessageWrapper>
        <ChatDialogMessageItem>
          Привет! Смотри, тут всплыл интересный кусок лунной космической истории
          — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC
          для полетов на Луну. Сейчас мы все знаем что астронавты летали с
          моделью 500 EL — и к слову говоря, все тушки этих камер все еще
          находятся на поверхности Луны, так как астронавты с собой забрали
          только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для
          космоса, но что-то пошло не так и на ракету они так никогда и не
          попали. Всего их было произведено 25 штук, одну из них недавно продали
          на аукционе за 45000 евро.
        </ChatDialogMessageItem>
        <ChatDialogMessageDate>11:56</ChatDialogMessageDate>
      </ChatDialogMessageWrapper>
      <ChatDialogMessageWrapper isMyMessage={isMyMessage}>
        <ChatDialogMessageItem>Круто!</ChatDialogMessageItem>
        <ChatDialogMessageStatus>
          {MessageIsRead ? (
            <Checks size={10} weight="bold" color="#3369F3" />
          ) : (
            <Check size={10} weight="bold" color="#3369F3" />
          )}
        </ChatDialogMessageStatus>
        <ChatDialogMessageDate isMyMessage={isMyMessage}>
          12:00
        </ChatDialogMessageDate>
      </ChatDialogMessageWrapper>
      <ChatDialogDate>19 июня</ChatDialogDate>
      <ChatDialogMessageWrapper>
        <ChatDialogMessageItem>
          Привет! Смотри, тут всплыл интересный кусок лунной космической истории
          — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC
          для полетов на Луну. Сейчас мы все знаем что астронавты летали с
          моделью 500 EL — и к слову говоря, все тушки этих камер все еще
          находятся на поверхности Луны, так как астронавты с собой забрали
          только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для
          космоса, но что-то пошло не так и на ракету они так никогда и не
          попали. Всего их было произведено 25 штук, одну из них недавно продали
          на аукционе за 45000 евро.
        </ChatDialogMessageItem>
        <ChatDialogMessageDate>11:56</ChatDialogMessageDate>
      </ChatDialogMessageWrapper>
      <ChatDialogMessageWrapper isMyMessage={isMyMessage}>
        <ChatDialogMessageItem>Круто!</ChatDialogMessageItem>
        <ChatDialogMessageStatus>
          {MessageIsRead ? (
            <Checks size={10} weight="bold" color="#3369F3" />
          ) : (
            <Check size={10} weight="bold" color="#3369F3" />
          )}
        </ChatDialogMessageStatus>
        <ChatDialogMessageDate isMyMessage={isMyMessage}>
          12:00
        </ChatDialogMessageDate>
      </ChatDialogMessageWrapper>
      <ChatDialogDate>19 июня</ChatDialogDate>
      <ChatDialogMessageWrapper>
        <ChatDialogMessageItem>
          Привет! Смотри, тут всплыл интересный кусок лунной космической истории
          — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC
          для полетов на Луну. Сейчас мы все знаем что астронавты летали с
          моделью 500 EL — и к слову говоря, все тушки этих камер все еще
          находятся на поверхности Луны, так как астронавты с собой забрали
          только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для
          космоса, но что-то пошло не так и на ракету они так никогда и не
          попали. Всего их было произведено 25 штук, одну из них недавно продали
          на аукционе за 45000 евро.
        </ChatDialogMessageItem>
        <ChatDialogMessageDate>11:56</ChatDialogMessageDate>
      </ChatDialogMessageWrapper>
      <ChatDialogMessageWrapper isMyMessage={isMyMessage}>
        <ChatDialogMessageItem>Круто!</ChatDialogMessageItem>
        <ChatDialogMessageStatus>
          {MessageIsRead ? (
            <Checks size={10} weight="bold" color="#3369F3" />
          ) : (
            <Check size={10} weight="bold" color="#3369F3" />
          )}
        </ChatDialogMessageStatus>
        <ChatDialogMessageDate isMyMessage={isMyMessage}>
          12:00
        </ChatDialogMessageDate>
      </ChatDialogMessageWrapper>
    </ChatDialogGeneralWrapper>
  );
};
