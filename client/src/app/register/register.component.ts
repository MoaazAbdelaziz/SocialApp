import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  model: any = {};
  cancelRegister = output<boolean>();
  private accountService = inject(AccountService);

  register() {
    this.accountService.register(this.model).subscribe({
      next: (res) => {
        console.log(res);
        this.cancel();
      },
      error: (err) => console.log(err),
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
