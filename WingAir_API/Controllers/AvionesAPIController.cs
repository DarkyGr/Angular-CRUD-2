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
    [RoutePrefix("api/AvionesAPI")]
    public class AvionesAPIController : ApiController
    {
        [Route("GetById/{id}")]
        public AvionesVO GetAvionById(int id)
        {
            using (WingAirEntities db = new WingAirEntities())
            {
                return (from a in db.Aviones
                        where a.AvionId == id
                        select new AvionesVO
                        {
                            AvionId = a.AvionId,
                            TipoId = a.TipoId,
                            Codigo = a.Codigo,
                            HorasVuelo = a.HorasVuelo,
                            CapacidadPasajeros = a.CapacidadPasajeros
                        }).SingleOrDefault();
            }
        }

        [Route("GetList")]
        public List<AvionesVO> GetListAviones()
        {
            List<AvionesVO> listaVO = new List<AvionesVO>();

            using (WingAirEntities db = new WingAirEntities())
            {
                foreach (var a in db.Aviones)
                {
                    AvionesVO aux = new AvionesVO();

                    aux.AvionId = a.AvionId;
                    aux.TipoId = a.TipoId;
                    aux.Codigo = a.Codigo;
                    aux.HorasVuelo = a.HorasVuelo;
                    aux.CapacidadPasajeros = a.CapacidadPasajeros;

                    listaVO.Add(aux);
                }

                return listaVO;
            }
        }

        [Route("Insert")]
        public string InsertAvion(AvionesVO aVO)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Aviones a = new Aviones();

                    a.TipoId = aVO.TipoId;
                    a.Codigo = aVO.Codigo;
                    a.HorasVuelo = aVO.HorasVuelo;
                    a.CapacidadPasajeros = aVO.CapacidadPasajeros;

                    db.Aviones.Add(a);

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

                    return "Avión Agregado con éxito.";
                }

            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }

        [Route("Update")]
        public string UpdateAvion(AvionesVO aVO)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Aviones a = new Aviones();

                    a.AvionId = aVO.AvionId;
                    a.TipoId = aVO.TipoId;
                    a.Codigo = aVO.Codigo;
                    a.HorasVuelo = aVO.HorasVuelo;
                    a.CapacidadPasajeros = aVO.CapacidadPasajeros;

                    db.Entry(a).State = System.Data.Entity.EntityState.Modified;
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

                    return "Avión Actualizado con éxito.";
                }
            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }

        [Route("Delete/{id}")]
        public string DeleteAvion(int id)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Aviones a = db.Aviones.Find(id);

                    if (a != null)
                    {
                        db.Aviones.Remove(a);

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
                        return "Avión no encontrado";
                    }

                    return "Avión Eliminado con éxito";
                }
            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }
    }
}
