namespace TaskManager.API.DTOs
{
    public class CreateTaskDto
    {  
        public string Title { get; set; } = string.Empty;

        public string? Description { get; set; }
    }
}
