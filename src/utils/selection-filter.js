export default function selectionFilter({ series, films }) {
   return {
      series: [
         {
            title: 'Documentaries',
            data: series.filter((item) => item.genre === 'documentaries')
         },
         {
            title: 'Commedies',
            data: series.filter((item) => item.genre === 'commedies')
         },
         {
            title: 'children',
            data: series.filter((item) => item.genre === 'children')
         },
         {
            title: 'Crime',
            data: series.filter((item) => item.genre === 'crime')
         },
         {
            title: 'feel Good',
            data: series.filter((item) => item.genre === 'feel-good')
         },

      ],
      films: [
         {
            title: 'Drama',
            data: films.filter((item) => item.genre === 'drama')
         },
         {
            title: 'Thriller',
            data: films.filter((item) => item.genre === 'thriller')
         },
         {
            title: 'Children',
            data: films.filter((item) => item.genre === 'children')
         },
         {
            title: 'Suspens',
            data: films.filter((item) => item.genre === 'suspense')
         },
         {
            title: 'Romance',
            data: films.filter((item) => item.genre === 'romance')
         },
      ]
   }
}