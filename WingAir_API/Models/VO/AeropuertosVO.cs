using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WingAir_API.Models.VO
{
    public class AeropuertosVO
    {
        public int AeropuertoId { get; set; }
        public string Nombre { get; set; }
        public string Municipio { get; set; }
        public string Estado { get; set; }
        public string Pais { get; set; }
    }
}