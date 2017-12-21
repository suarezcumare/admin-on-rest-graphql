export default {
  dashboard: {
    welcome: "Bienvenido",
    text: "alguna informacion aqui general"
  },
  resources: {
    Country: {
      name: 'Pais |||| Paises',
      fields: {
        name: 'Nombre',
        id: 'Id',
        code: 'Codigo'
      }
    },
    BusinessUnit: {
      name: 'Unida de Negocio |||| Unidades de Negocios',
      fields: {
        country: { id: 'Pais', name: 'Pais' },
        reviewSettings: {id: 'Configuración de revisión'},
        name: 'Nombre',
        id: 'Id',
        code: 'Codigo',
      }
    },
    CategorySetting: {
      name: 'Configuración de Clasificación |||| Configuración de Clasificaciones',
      fields: {
        name: 'Nombre',
        id: 'Id',
        code: 'Codigo',
        description: 'Descricción',
      }
    },
    RatingSetting: {
      name: 'Configuración de Categoria |||| Configuración de Categorias',
      fields: {
        name: 'Nombre',
        id: 'Id',
        code: 'Codigo',
        title: 'Titulo',
        description: 'Descricción',
      }
    },
    ReviewCategorySetting: {
      name: 'Configuración de revisión de categoria |||| Configuración de revisión de categorias',
      fields: {
        id: 'Id',
        reviewSettingId: 'Configuración de revisión',
        categorySettingId: 'Configuración de categoria',
      }
    },
    ReviewSetting: {
      name: 'Configuración de revisión |||| Configuración de revisión',
      fields: {
        ratingSetting: { id: "Configuración de Categoria"},
        businessUnit: { id: "Unida de Negocio"},
        id: 'Id',
        detailed: 'Detalle',
        businessUnitId: 'Unidad de Negocio',
        ratingSettingId: 'Configuración de clasificación',
      }
    },
  },
  aor: {
    action: {
      delete: 'Eliminar',
      show: 'Ver',
      list: 'Lista',
      save: 'Guardar',
      create: 'Crear',
      edit: 'Editar',
      cancel: 'Cancelar',
      refresh: 'Actualizar',
      add_filter: 'Agregar filtro',
      remove_filter: 'Eliminar el filtro',
      back: 'Regresar'
    },
    boolean: {
      true: 'Si',
      false: 'No'
    },
    page: {
      list: 'Lista de %{name}',
      edit: '%{name} #%{id}',
      show: '%{name} #%{id}',
      create: 'Creando %{name}',
      delete: 'Eliminado %{name} #%{id}',
      dashboard: 'Inicio',
      not_found: 'No encontrado'
    },
    input: {
      file: {
        upload_several:
            'Drop some files to upload, or click to select one.',
        upload_single: 'Drop a file to upload, or click to select it.',
      },
      image: {
        upload_several:
            'Drop some pictures to upload, or click to select one.',
        upload_single:
            'Drop a picture to upload, or click to select it.',
      },
    },
    message: {
      yes: 'Si',
      no: 'No',
      are_you_sure: '¿Estas Seguro?',
      about: 'Acerca',
      not_found:
          'Either you typed a wrong URL, or you followed a bad link.',
    },
    navigation: {
      no_results: 'No results found',
      page_out_of_boundaries: 'Page number %{page} out of boundaries',
      page_out_from_end: 'Cannot go after last page',
      page_out_from_begin: 'Cannot go before page 1',
      page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
      next: 'Proximo',
      prev: 'Atras',
    },
    auth: {
      username: 'Usuario',
      password: 'Contraseña',
      sign_in: 'Iniciar Sesion',
      sign_in_error: 'La autentificacion fallo, vuelve a intentar',
      logout: 'Cerrar Sesion',
    },
    notification: {
      updated: 'Elemento Actualizado',
      created: 'Elemento creado',
      deleted: 'Elemento eliminado',
      item_doesnt_exist: 'Elemente no existe',
      http_error: 'Error con el servidor'
    },
    validation: {
      required: 'Requerido',
      minLength: 'Must be %{min} characters at least',
      maxLength: 'Must be %{max} characters or less',
      minValue: 'Must be at least %{min}',
      maxValue: 'Must be %{max} or less',
      number: 'Must be a number',
      email: 'Must be a valid email',
    },
  },
};