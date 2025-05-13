 
 
 
export interface Contacts{
    date: string;
    _id: number;
    name:string;
    email:string;
    phone: string;
    subject: string;
    comment: string;
    status: string;
    archived: boolean;
    request: string,
}


export interface ContactState {
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    statusDelete: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error : string | undefined;
    data: Contacts[] ;
     contactId: {
        status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
        statusDelete: 'idle' | 'pending' | 'fulfilled' | 'rejected';
        data: Contacts | null;
        error: string | undefined;
    }
}
export interface SelectContact {
    type: string;
}
