export interface Users {
    name: string,
    _id: string,
    email: string,
    start_date: string,
    description: string,
    phone: string,
    status: string,
    department: string, 
}

export interface UserState {
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    statusDelete: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error : string | undefined;
    data: Users[] ;
    userId: {
        status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
        statusDelete: 'idle' | 'pending' | 'fulfilled' | 'rejected';
        data: Users | null;
        error: string | undefined;
    }
}

export interface UsersEdit{
    name: string,
    start_date: string,
    description: string,
    phone: string,
    email: string,
    password: string,
    department: string,
    status: string,
    _id: string,
}
export interface UsersCreate {
    _id?: string,
    name: string,
    start_date: string,
    description: string,
    phone: string,
    email: string,
    job_desk?: string,
    password: string,
    status: string,
    department: string,
}
