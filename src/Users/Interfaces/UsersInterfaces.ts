export interface Users {
    full_name: string,
    id: number,
    email: string,
    start_date: string,
    job_description: string,
    phone_number: string,
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

<<<<<<< HEAD
=======
export interface ButtonFakeProps {
    active: boolean,
}

>>>>>>> 20e8c94a76ff30b63110851212c9fe8cc4b6849c
export interface UsersEdit{
    full_name: string,
    start_date: string,
    job_description: string,
    phone_number: string,
    email: string,
    job_desk: string,
    password: string,
    status: string,
    
}
export interface UsersCreate {
    id: number,
    full_name: string,
    start_date: string,
    job_description: string,
    phone_number: string,
    email: string,
    job_desk: string,
    password: string,
    status: string,
    department: string,
}
