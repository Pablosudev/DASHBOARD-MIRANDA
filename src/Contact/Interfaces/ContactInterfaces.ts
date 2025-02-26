 
 
 
export interface Contacts{
    status: string;
    archived: any;
    date: string,
    _id:string,
    full_name:string,
    email:string,
    phone: string,
    asunto: string,
    comment: string, 
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
