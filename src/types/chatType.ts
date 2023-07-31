export interface DmListType {
	_id: string;
	users: Array<{
		_id: string;
		userName?: string;
		secretName?: string;
		email?: string;
	}>;
	messages: string[];
	lastMessage: string | null;
	__v: number;
}

export type chatListType = DmListType[];

export interface MessageType {
	_id: string;
	sender: Array<{
		_id: string;
		email: string;
	}>;
	chat: string;
	content: string;
	timestamp: string;
	__v: number;
}

export type MessageListType = MessageType[];