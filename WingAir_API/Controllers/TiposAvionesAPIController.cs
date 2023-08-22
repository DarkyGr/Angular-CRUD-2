using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WingAir_API.Models.VO;
using WingAir_API.Models;
using System.Data.Entity.Validation;

namespace WingAir_API.Controllers
{
    [RoutePrefix("api/TiposAvionesAPI")]
    public class TiposAvionesAPIController : ApiController
    {
        [Route("GetById/{id}")]
        public TiposAvionesVO GetTipoAvionById(int id)
        {
            using (WingAirEntities db = new WingAirEntities())
            {
                return (from ta in db.TiposAviones
                        where ta.TipoId == id
                        select new TiposAvionesVO
                        {
                            TipoId = ta.TipoId,
                            Nombre = ta.Nombre,
                        }).SingleOrDefault();
            }
        }

        [Route("GetList")]
        public List<TiposAvionesVO> GetListTiposAviones()
        {
            List<TiposAvionesVO> listaVO = new List<TiposAvionesVO>();

            using (WingAirEntities db = new WingAirEntities())
            {
                foreach (var ta in db.TiposAviones)
                {
                    TiposAvionesVO aux = new TiposAvionesVO();

                    aux.TipoId = ta.TipoId;
                    aux.Nombre = ta.Nombre;

                    listaVO.Add(aux);
                }

                return listaVO;
            }
        }

        [Route("Insert")]
        public string InsertTipoAvion(TiposAvionesVO taVO)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    TiposAviones ta = new TiposAviones();

                    ta.Nombre = taVO.Nombre;

                    db.TiposAviones.Add(ta);

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

                    return "Tipo de Avión Agregado con éxito.";
                }

            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }

        [Route("Update")]
        public string UpdateTipoAvion(TiposAvionesVO taVO)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    TiposAviones ta = new TiposAviones();

                    ta.TipoId = taVO.TipoId;
                    ta.Nombre = taVO.Nombre;

                    db.Entry(ta).State = System.Data.Entity.EntityState.Modified;
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

                    return "Tipo de Avión Actualizado con éxito.";
                }
            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }

        [Route("Delete/{id}")]
        public string DeleteTipoAvion(int id)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    TiposAviones ta = db.TiposAviones.Find(id);

                    if (ta != null)
                    {
                        db.TiposAviones.Remove(ta);

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
                        return "Tipo de Avión no encontrado";
                    }

                    return "Tipo de Avión Eliminado con éxito";
                }
            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }

    }
}
