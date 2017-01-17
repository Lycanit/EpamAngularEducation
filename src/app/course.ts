export class Course {
    public Id: number = -1;
    public Title: string = '';
    public Description: string = '';
    public Date: Date = new Date(2016, 0, 1);
    public Duration: number = 0;
    public Authors: string[] = [];
}