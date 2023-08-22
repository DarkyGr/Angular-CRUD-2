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
    [RoutePrefix("api/AeropuertosAPI")]
    public class AeropuertosAPIController : ApiController
    {
        [Route("GetById/{id}")]
        public AeropuertosVO GetAeropuertoById(int id)
        {
            using (WingAirEntities db = new WingAirEntities())
            {
                return (from a in db.Aeropuertos
                        where a.AeropuertoId == id
                        select new AeropuertosVO
                        {
                            AeropuertoId = a.AeropuertoId,
                            Nombre = a.Nombre,
                            Municipio = a.Municipio,
                            Estado = a.Estado,
                            Pais = a.Pais,
                        }).SingleOrDefault();
            }
        }

        [Route("GetList")]
        public List<AeropuertosVO> GetListAeropuertos()
        {
            List<AeropuertosVO> listaVO = new List<AeropuertosVO>();

            using (WingAirEntities db = new WingAirEntities())
            {
                foreach (var a in db.Aeropuertos)
                {
                    AeropuertosVO aux = new AeropuertosVO();

                    aux.AeropuertoId = a.AeropuertoId;
                    aux.Nombre = a.Nombre;
                    aux.Municipio = a.Municipio;
                    aux.Estado = a.Estado;
                    aux.Pais = a.Pais;

                    listaVO.Add(aux);
                }

                return listaVO;
            }
        }

        [Route("Insert")]
        public string InsertAeropuerto(AeropuertosVO aVO)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Aeropuertos a = new Aeropuertos();

                    a.Nombre = aVO.Nombre;
                    a.Municipio = aVO.Municipio;
                    a.Estado = aVO.Estado;
                    a.Pais = aVO.Pais;

                    db.Aeropuertos.Add(a);

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

                    return "Aeropuerto Agregado con éxito.";
                }

            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }

        [Route("Update")]
        public string UpdateAeropuerto(AeropuertosVO aVO)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Aeropuertos a = new Aeropuertos();

                    a.AeropuertoId = aVO.AeropuertoId;
                    a.Nombre = aVO.Nombre;
                    a.Municipio = aVO.Municipio;
                    a.Estado = aVO.Estado;
                    a.Pais = aVO.Pais;

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

                    return "Aeropuerto Actualizado con éxito.";
                }
            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }

        [Route("Delete/{id}")]
        public string DeleteAeropuerto(int id)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Aeropuertos a = db.Aeropuertos.Find(id);

                    if (a != null)
                    {
                        db.Aeropuertos.Remove(a);

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
                        return "Aerupuerto no encontrado";
                    }

                    return "Aerupuerto Eliminado con éxito";
                }
            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }
    }
}
