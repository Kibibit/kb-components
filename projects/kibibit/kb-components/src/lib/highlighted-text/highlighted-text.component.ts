import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'kb-highlighted-text',
  templateUrl: './highlighted-text.component.html',
  styleUrls: ['./highlighted-text.component.css']
})
export class HighlightedTextComponent implements OnChanges {

  @Input() needle: String;
  @Input() haystack: String;
  public textSections;

  ngOnChanges() {
    this.match();
  }

  match() {
    let location = 0;
    this.textSections = [];

    if (!this.needle) {
      const onlySection = {
        match: false,
        text: this.haystack
      };

      this.textSections.push(onlySection);

      return;
    }

    if (this.needle && this.haystack) {
      const needle = String(this.needle);
      const haystack = String(this.haystack);
      let str = haystack;
      let startIndex = str.toLowerCase().indexOf(needle.toLowerCase());

      while (startIndex !== -1) {
        const endLength = needle.length;

        const section = {
          match: startIndex === 0,
          text: startIndex === 0 ? str.substr(0, endLength) : str.substr(0, startIndex)
        };
        this.textSections.push(section);

        str = startIndex === 0 ? str.substr(endLength) : str.substr(startIndex);
        startIndex = str.toLowerCase().indexOf(needle.toLowerCase());
        location += section.text.length;
      }

      if (location !== this.haystack.length) {
        const lastSection = {
          match: false,
          text: str
        };

        this.textSections.push(lastSection);
      }
    }
  }
}
