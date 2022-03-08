import { Movie } from './movie';
export class MovieRepository {
  private movies : Movie[];

  constructor(){
    this.movies = [


        {
          id: 1,
          title: 'Batman',
          description:
            "Bruce Wayne, nam-ı diğer Batman, suçla mücadelesinin ikinci yılında, Gotham City'de kendi ailesine bağlanan yolsuzluğu ortaya çıkarırken, Riddler adıyla bilinen bir seri katil tehditi ile karşı karşıya kalır.",
          imageUrl: 'Batman.jpg',
        },
        {
          id: 2,
          title: 'Scream 5',
          description:
            'Sakin Woodsboro kasabasını şoke eden acımasız cinayetler zincirinden 25 yıl sonra yeni bir katil, Hayalet maskesini takar ve kasabanın ölümcül geçmişine ait sırlarını yeniden canlandırmak için bir grup genci hedef almaya başlar.',
          imageUrl: 'Ciglik.jpg',
        },
        {
          id: 3,
          title: 'The FallOut',
          description:
            "Vada, liseye giden genç bir kızdır. Onun hayatı, okulda yaşadığı bir olaydan sonra bambaşka bir hal alır. Yaşadığı trajedinin ardından Vada'nın ailesi ve arkadaşları ile olan ilişkisi tamamen değişir. Dünyaya farklı açılardan bakmaya başlayan Vada, yaşadığı trajedinin sonuçlarıyla mücadele etmeye çalışır.",
          imageUrl: 'Dram.jpg',
        },
        {
          id: 4,
          title: 'Conjuring',
          description:
            "Konusunu Perron ailesinin gerçek yaşam öyküsünden alan Korku Seansı, doğaüstü olayları inceleyip aydınlatmaya çalışan dünyaca ünlü çift Ed ve Lorraine Warren'ın karşılaştıkları ürkütücü bir vakayı ele alıyor. Ed ve Lorraine Warren bir gün Perron ailesinden bir telefon aldıklarında hayatlarının en korkutucu görevine atıldıklarının farkında değildir. Perron ailesinin gözlerden uzak çiftlik evi nedeni bilinmeyen karanlık bir varlık tarafından kuşatılmıştır ve bu nedenle de hayatları tam bir kabusa dönüşmüştür. Bu vakayı çözebileceklerine inanan deneyimli Warren çifti, ne kadar şeytani bir varlıkla karşı karşıya olduklarını çok geç fark edeceklerdir.",
          imageUrl: 'Horror.jpg',
        },
      ];

  }

  getMovies(): Movie[]{
    return this.movies;
  }

  getMovieById(id:number): Movie{
    return this.movies.find(i=>i.id==id);
  }
}


