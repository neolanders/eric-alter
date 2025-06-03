export class PdfViewerComponent implements OnInit {
  pdfData: Blob;
  currentPage = 1;
  totalPages = 1;

  constructor(private pdfService: PdfService) {}

  async ngOnInit() {
    this.pdfData = await this.pdfService.getPDF();
    this.totalPages = this.getPdfTotalPages();
  }

  getPdfTotalPages(): number {
    // Implement logic to get the total number of pages from the PDF data
    return 10; // Replace with the actual total pages count
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
// https://medium.com/widle-studio/embracing-native-capabilities-viewing-pdfs-in-angular-without-external-packages-a503aafbb90f