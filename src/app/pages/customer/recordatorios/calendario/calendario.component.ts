import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Event {
  title: string;
  time: string;
}

interface DayEvents {
  day: number;
  month: number;
  year: number;
  events: Event[];
}


@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent {
  today: Date = new Date();
  activeDay: number | null = null;
  month: number = this.today.getMonth();
  year: number = this.today.getFullYear();
  eventsArr: DayEvents[] = [];
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  days: string = '';

  ngOnInit(): void {
    this.initCalendar();
  }

  initCalendar(): void {
    const firstDay = new Date(this.year, this.month, 1);
    const lastDay = new Date(this.year, this.month + 1, 0);
    const prevLastDay = new Date(this.year, this.month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    this.days = '';

    for (let x = day; x > 0; x--) {
      this.days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDate; i++) {
      let event = this.isEventPresent(i);

      if (
        i === this.today.getDate() &&
        this.year === this.today.getFullYear() &&
        this.month === this.today.getMonth()
      ) {
        this.activeDay = i;
        if (event) {
          this.days += `<div class="day today active event">${i}</div>`;
        } else {
          this.days += `<div class="day today active">${i}</div>`;
        }
      } else {
        if (event) {
          this.days += `<div class="day event">${i}</div>`;
        } else {
          this.days += `<div class="day">${i}</div>`;
        }
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      this.days += `<div class="day next-date">${j}</div>`;
    }
  }

  isEventPresent(day: number): boolean {
    return this.eventsArr.some(
      (eventObj) =>
        eventObj.day === day &&
        eventObj.month === this.month + 1 &&
        eventObj.year === this.year
    );
  }

  prevMonth(): void {
    this.month--;
    if (this.month < 0) {
      this.month = 11;
      this.year--;
    }
    this.initCalendar();
  }

  nextMonth(): void {
    this.month++;
    if (this.month > 11) {
      this.month = 0;
      this.year++;
    }
    this.initCalendar();
  }

  goToToday(): void {
    this.today = new Date();
    this.month = this.today.getMonth();
    this.year = this.today.getFullYear();
    this.initCalendar();
  }

  addEvent(day: number): void {
    const newEvent: Event = {
      title: 'New Event',
      time: '10:00 AM',
    };
    const dayEvents = this.eventsArr.find(
      (event) =>
        event.day === day &&
        event.month === this.month + 1 &&
        event.year === this.year
    );

    if (dayEvents) {
      dayEvents.events.push(newEvent);
    } else {
      this.eventsArr.push({
        day,
        month: this.month + 1,
        year: this.year,
        events: [newEvent],
      });
    }
    this.initCalendar();
  }
}