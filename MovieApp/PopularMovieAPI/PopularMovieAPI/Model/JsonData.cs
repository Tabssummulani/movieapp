using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PopularMovieAPI.Model
{

    public class PosterArt
    {
        public string url { get; set; }
        public int width { get; set; }
        public int height { get; set; }
    }

    public class Images
    {
        public PosterArt PosterArt { get; set; }
    }

    public class Entry
    {
        public string title { get; set; }
        public string description { get; set; }
        public string programType { get; set; }
        public Images images { get; set; }
        public int releaseYear { get; set; }
    }

    public class JsonData
    {
        public int total { get; set; }
        public List<Entry> entries { get; set; }
    }


}
