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
    [RoutePrefix("api/PilotosAPI")]
    public class PilotosAPIController : ApiController
    {
        [Route("GetById/{id}")]
        public PilotosVO GetPilotoById(int id)
        {
            using (WingAirEntities db = new WingAirEntities())
            {
                return (from p in db.Pilotos
                        where p.PilotoId == id
                        select new PilotosVO
                        {
                            PilotoId = p.PilotoId,
                            Codigo = p.Codigo,
                            Nombre = p.Nombre,
                            Sexo = p.Sexo,
                            HorasVuelo = p.HorasVuelo,
                        }).SingleOrDefault();
            }
        }

        [Route("GetList")]
        public List<PilotosVO> GetListPilotos()
        {
            List<PilotosVO> listaVO = new List<PilotosVO>();

            using (WingAirEntities db = new WingAirEntities())
            {
                foreach (var p in db.Pilotos)
                {
                    PilotosVO aux = new PilotosVO();

                    aux.PilotoId = p.PilotoId;
                    aux.Codigo = p.Codigo;
                    aux.Nombre = p.Nombre;
                    aux.Sexo = p.Sexo;
                    aux.HorasVuelo = p.HorasVuelo;

                    listaVO.Add(aux);
                }

                return listaVO;
            }
        }

        [Route("Insert")]
        public string InsertPiloto(PilotosVO pVO)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Pilotos p = new Pilotos();
                    
                    p.Codigo = pVO.Codigo;
                    p.Nombre = pVO.Nombre;
                    p.Sexo = pVO.Sexo;
                    p.HorasVuelo = pVO.HorasVuelo;

                    db.Pilotos.Add(p);

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

                    return "Piloto Agregado con éxito.";
                }

            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }

        [Route("Update")]
        public string UpdatePiloto(PilotosVO pVO)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Pilotos p = new Pilotos();

                    p.PilotoId = pVO.PilotoId;
                    p.Codigo = pVO.Codigo;
                    p.Nombre = pVO.Nombre;
                    p.Sexo = pVO.Sexo;
                    p.HorasVuelo = pVO.HorasVuelo;

                    db.Entry(p).State = System.Data.Entity.EntityState.Modified;
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

                    return "Piloto Actualizado con éxito.";
                }
            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }

        [Route("Delete/{id}")]
        public string DeletePiloto(int id)
        {
            try
            {
                using (WingAirEntities db = new WingAirEntities())
                {
                    Pilotos p = db.Pilotos.Find(id);

                    if (p != null)
                    {
                        db.Pilotos.Remove(p);

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
                        return "Piloto no encontrado";
                    }

                    return "Piloto Eliminado con éxito";
                }
            }
            catch (Exception ex)
            {
                return "Error: " + ex.Message;
            }
        }
    }
}
