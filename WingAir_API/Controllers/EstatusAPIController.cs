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
    [RoutePrefix("api/EstatusAPI")]
    public class EstatusAPIController : ApiController
    {
        [Route("GetById/{id}")]
        public EstatusVO GetEstatusById(int id)
        {
            using (WingAirEntities db = new WingAirEntities())
            {
                return (from e in db.Estatus
                        where e.EstatusId == id
                        select new EstatusVO
                        {
                            EstatusId = e.EstatusId,
                            Nombre = e.Nombre,
                        }).SingleOrDefault();
            }
        }

        [Route("GetList")]
        public List<EstatusVO> GetListEstatus()
        {
            List<EstatusVO> listaVO = new List<EstatusVO>();

            using (WingAirEntities db = new WingAirEntities())
            {
                foreach (var e in db.Estatus)
                {
                    EstatusVO aux = new EstatusVO();

                    aux.EstatusId = e.EstatusId;
                    aux.Nombre = e.Nombre;

                    listaVO.Add(aux);
                }

                return listaVO;
            }
        }

        [Route("Insert")]
        public string InsertEstatus(EstatusVO eVO)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Estatus e = new Estatus();

                    e.Nombre = eVO.Nombre;

                    db.Estatus.Add(e);

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

                    return "Estatus Agregado con éxito.";
                }

            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }

        [Route("Update")]
        public string UpdateEstatus(EstatusVO eVO)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Estatus e = new Estatus();

                    e.EstatusId = eVO.EstatusId;
                    e.Nombre = eVO.Nombre;

                    db.Entry(e).State = System.Data.Entity.EntityState.Modified;
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

                    return "Estatus Actualizado con éxito.";
                }
            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }

        [Route("Delete/{id}")]
        public string DeleteEstatus(int id)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Estatus e = db.Estatus.Find(id);

                    if (e != null)
                    {
                        db.Estatus.Remove(e);

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
                        return "Estatus no encontrado";
                    }

                    return "Estatus Eliminado con éxito";
                }
            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }
    }
}
