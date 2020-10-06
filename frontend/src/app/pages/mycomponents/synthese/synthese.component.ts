import {Component, Input, OnInit} from '@angular/core';
import {DocumentHandlerService} from '../../../@core/backend/common/services/DocumentHandler.service';
import {Document} from '../../model/Document';

@Component({
  selector: 'ngx-synthese',
  templateUrl: './synthese.component.html',
  styleUrls: ['./synthese.component.scss'],
  providers: [DocumentHandlerService],
})
export class SyntheseComponent implements OnInit {
  @Input('atelier') atelier: string;
  fileName: string = '';
  document: Document = new Document();

  constructor(private uploadService: DocumentHandlerService) {
  }

  ngOnInit(): void {
  }

  fileClicked(file: File) {
    const formdata: FormData = new FormData();
    console.log(file);
    formdata.append('file', file);
    this.uploadService.upload(formdata).subscribe(data => {
      console.log(data);
    });
  }
}
