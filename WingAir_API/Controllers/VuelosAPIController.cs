using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WingAir_API.Models.VO;
using WingAir_API.Models;

namespace WingAir_API.Controllers
{
    [RoutePrefix("api/VuelosAPI")]
    public class VuelosAPIController : ApiController
    {
        [Route("GetById/{id}")]
        public VuelosVO GetVueloById(int id)
        {
            using (WingAirEntities db = new WingAirEntities())
            {
                return (from v in db.Vuelos
                        where v.VueloId == id
                        select new VuelosVO
                        {
                            VueloId = v.VueloId,
                            AeropuertoOrigenId = v.AeropuertoOrigenId,
                            AeropuertoDestinoId = v.AeropuertoDestinoId,
                            AvionId = v.AvionId,
                            PilotoId = v.PilotoId,
                            EstatusId = v.EstatusId,
                            Nombre = v.Nombre,
                            FechaSalida = v.FechaSalida,
                            FechaLlegadaEstimada = v.FechaLlegadaEstimada,
                            FechaLlegadaReal = v.FechaLlegadaReal,
                            HorasVuelo = v.HorasVuelo
                        }).SingleOrDefault();
            }
        }

        [Route("GetList")]
        public List<VuelosVO> GetListVuelos()
        {
            List<VuelosVO> listaVO = new List<VuelosVO>();

            using (WingAirEntities db = new WingAirEntities())
            {
                foreach (var v in db.Vuelos)
                {
                    VuelosVO aux = new VuelosVO();

                    aux.VueloId = v.VueloId;
                    aux.AeropuertoDestinoId = v.AeropuertoOrigenId;
                    aux.AeropuertoDestinoId = v.AeropuertoDestinoId;
                    aux.AvionId = v.AvionId;
                    aux.PilotoId = v.PilotoId;
                    aux.EstatusId = v.EstatusId;
                    aux.Nombre = v.Nombre;
                    aux.FechaSalida = v.FechaSalida;
                    aux.FechaLlegadaEstimada = v.FechaLlegadaEstimada;
                    aux.FechaLlegadaReal = v.FechaLlegadaReal;
                    aux.HorasVuelo = v.HorasVuelo;

                    listaVO.Add(aux);
                }

                return listaVO;
            }
        }

        [Route("Insert")]
        public string InsertVuelo(VuelosVO vVO)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Vuelos v = new Vuelos();

                    v.AeropuertoOrigenId = vVO.AeropuertoOrigenId;
                    v.AeropuertoDestinoId = vVO.AeropuertoDestinoId;
                    v.AvionId = vVO.AvionId;
                    v.PilotoId = vVO.PilotoId;
                    v.EstatusId = vVO.EstatusId;
                    v.Nombre = vVO.Nombre;
                    v.FechaSalida = vVO.FechaSalida;
                    v.FechaLlegadaEstimada = vVO.FechaLlegadaEstimada;
                    v.FechaLlegadaReal = vVO.FechaLlegadaReal;
                    v.HorasVuelo = vVO.HorasVuelo;

                    db.Vuelos.Add(v);

                    try
                    {
                        db.SaveChanges();
                    }
                    catch (DbEntityValidationException ex)
                    {
                        string resp = "";
                        // Recorro todo los errores de la entidad referencial
                        foreach (var error in ex.EntityValidationErrors)
                        {
                            // Recorro los detalles de cada uno de los errores
                            foreach (var validatorError in error.ValidationErrors)
                            {
                                resp = "Error en la entidad: " + error.Entry.Entity.GetType().Name;
                                resp += " - Propiedad: " + validatorError.PropertyName;
                                resp += " - Error: " + validatorError.ErrorMessage;
                            }
                        }

                        return resp;
                    }

                    return "Vuelo Agregado con éxito.";
                }

            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }

        [Route("Update")]
        public string UpdateVuelo(VuelosVO vVO)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Vuelos v = new Vuelos();

                    v.VueloId = vVO.VueloId;
                    v.AeropuertoOrigenId = vVO.AeropuertoOrigenId;
                    v.AeropuertoDestinoId = vVO.AeropuertoDestinoId;
                    v.AvionId = vVO.AvionId;
                    v.PilotoId = vVO.PilotoId;
                    v.EstatusId = vVO.EstatusId;
                    v.Nombre = vVO.Nombre;
                    v.FechaSalida = vVO.FechaSalida;
                    v.FechaLlegadaEstimada = vVO.FechaLlegadaEstimada;
                    v.FechaLlegadaReal = vVO.FechaLlegadaReal;
                    v.HorasVuelo = vVO.HorasVuelo;

                    db.Entry(v).State = System.Data.Entity.EntityState.Modified;
                    try
                    {
                        db.SaveChanges();
                    }
                    catch (DbEntityValidationException ex)
                    {
                        string resp = "";
                        // Recorro todo los errores de la entidad referencial
                        foreach (var error in ex.EntityValidationErrors)
                        {
                            // Recorro los detalles de cada uno de los errores
                            foreach (var validatorError in error.ValidationErrors)
                            {
                                resp = "Error en la entidad: " + error.Entry.Entity.GetType().Name;
                                resp += " - Propiedad: " + validatorError.PropertyName;
                                resp += " - Error: " + validatorError.ErrorMessage;
                            }
                        }

                        return resp;
                    }

                    return "Vuelo Actualizado con éxito.";
                }
            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }

        [Route("Delete/{id}")]
        public string DeleteVuelo(int id)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Vuelos v = db.Vuelos.Find(id);

                    if (v != null)
                    {
                        db.Vuelos.Remove(v);

                        try
                        {
                            db.SaveChanges();
                        }
                        catch (DbEntityValidationException ex)
                        {
                            string resp = "";
                            // Recorro todo los errores de la entidad referencial
                            foreach (var error in ex.EntityValidationErrors)
                            {
                                // Recorro los detalles de cada uno de los errores
                                foreach (var validatorError in error.ValidationErrors)
                                {
                                    resp = "Error en la entidad: " + error.Entry.Entity.GetType().Name;
                                    resp += " - Propiedad: " + validatorError.PropertyName;
                                    resp += " - Error: " + validatorError.ErrorMessage;
                                }
                            }

                            return resp;
                        }
                    }
                    else
                    {
                        return "Vuelo no encontrado";
                    }

                    return "Vuelo Eliminado con éxito";
                }
            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }
    }
}
