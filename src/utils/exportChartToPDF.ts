import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

type ExportChartToPDFProps = {
  element: HTMLDivElement | null
  fileName?: string
}

// Export chart element to PDF
export async function exportChartToPDF({
  element,
  fileName = 'chart.pdf',
}: ExportChartToPDFProps) {
  // Prevent export if element not found
  if (!element) {
    return {
      ok: false,
      error:
        'Chart element not found',
    }
  }

  try {
    // Convert HTML to canvas
    const canvas =
      await html2canvas(
        element,
        {
          scale: 2,
          backgroundColor:
            '#ffffff',
        }
      )


    // Create PDF
    const pdf =
      new jsPDF({
        orientation:
          'landscape',
        unit: 'px',
        format: 'a4',
      })

    // PDF layout
    const padding = 20
    const pdfWidth =
      pdf.internal.pageSize.getWidth()

    const width =
      pdfWidth - padding * 2

    const height =
      (canvas.height *
        width) /
      canvas.width

    // Add chart image to PDF
    pdf.addImage(
      canvas.toDataURL(
        'image/png'
      ),
      'PNG',
      padding,
      padding,
      width,
      height
    )

    // Download PDF
    pdf.save(fileName)

    return { ok: true }
  } catch (error) {
    console.error(error)

    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : 'Export failed',
    }
  }
}