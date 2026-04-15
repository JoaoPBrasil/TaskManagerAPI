using FluentValidation;
using TaskManager.API.DTOs;

namespace TaskManager.API.Validators
{
    public class CreateTaskDtoValidator : AbstractValidator<CreateTaskDto>
    {
        public CreateTaskDtoValidator()
        {
            RuleFor(task => task.Title)
                .NotEmpty()
                .WithMessage("Title is required.")
                .MinimumLength(3)
                .WithMessage("Title must be at least 3 characters.")
                .MaximumLength(100)
                .WithMessage("Title must be less than 100 characters.");

            RuleFor(task => task.Description)
                .MaximumLength(200)
                .WithMessage("Description must be less than 200 characters.");
        }
    }
}
