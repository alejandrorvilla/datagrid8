import {
  DataGridPremium,
  DataGridPremiumProps,
  GridValidRowModel,
  useGridApiRef,
} from '@mui/x-data-grid-premium'
import classNames from 'classnames'

function DataGrid(props: DataGridPremiumProps & GridValidRowModel) {
  const apiRef = useGridApiRef()

  return (
    <DataGridPremium
      {...props}
      apiRef={apiRef}
      className={classNames('o-datagrid', {
        [props.className || '']: !!props.className,
      })}
      onRowSelectionModelChange={(rowSelectionModel, details) => {
        const recordId = rowSelectionModel[0]
        if (
          props.onRowSelectionModelChange &&
          recordId != null &&
          (typeof recordId !== 'string' ||
            !recordId.startsWith('auto-generated-row'))
        ) {
          props.onRowSelectionModelChange(rowSelectionModel, details)
        }
      }}
      slots={{
        ...props.slots,
        columnMenuFilterIcon: () => (
          <span className="core-regular-filter o-fwepi-large-icon" >x</span>
        ),
      }}
      autosizeOnMount
      hideFooter
      columnHeaderHeight={39}
      rowHeight={32}
      localeText={{
        filterPanelAddFilter: 'Agregar filtro',
        filterPanelRemoveAll: 'Eliminar todos',
        columnMenuLabel: 'Menú',
        columnMenuSortAsc: 'Ordenar por ASC',
        columnMenuSortDesc: 'Ordenar por DESC',
        columnMenuFilter: 'Filtrar',
        toolbarColumns: 'Mostrar',
        columnMenuHideColumn: 'Ocultar columna',
        columnMenuManageColumns: 'Gestionar columnas',
        columnMenuUnsort: 'Deshacer ordenamiento',
        columnsManagementShowHideAllText: `Mostrar todo/Ocultar todo`,
        columnsManagementSearchTitle: 'Buscar',
        toolbarFiltersTooltipShow: 'Filtros',
        toolbarFiltersTooltipHide: 'Filtros',
        toolbarFilters: 'Filtrar',
        filterPanelOperator: 'Operador',
        filterPanelOperatorAnd: 'Y',
        filterPanelOperatorOr: 'O',
        filterPanelColumns: 'Columna',
        filterPanelInputLabel: 'Valor',
        filterPanelInputPlaceholder: 'Filtrar por valor',
        filterOperatorContains: 'Contiene',
        filterOperatorEquals: 'igual a',
        filterOperatorStartsWith: 'Comienza con',
        filterOperatorEndsWith: 'Termina con',
        filterOperatorIs: 'es',
        filterOperatorNot: 'No es',
        filterOperatorAfter: 'Después de',
        filterOperatorOnOrAfter: 'En o después de',
        filterOperatorBefore: 'Antes de',
        filterOperatorOnOrBefore: 'En o antes de',
        filterOperatorIsEmpty: 'Está vacío',
        filterOperatorDoesNotContain: 'No contiene',
        filterOperatorIsNotEmpty: 'No está vacío',
        filterOperatorIsAnyOf: 'Es cualquiera de',
        filterOperatorDoesNotEqual: 'Diferente a',
        columnHeaderSortIconLabel: 'Ordenar por',
        pinToLeft: 'Anclar a la izquierda',
        pinToRight: 'Anclar a la derecha',
        unpin: 'Desanclar',
        aggregationMenuItemHeader: 'Operaciones',
        aggregationFunctionLabelSum: 'Sumatoria',
        aggregationFunctionLabelAvg: 'Promedio',
        aggregationFunctionLabelMin: 'Mínimo',
        aggregationFunctionLabelMax: 'Máximo',
        aggregationFunctionLabelSize: 'Tamaño',
        groupingColumnHeaderName: 'Grupo',
        noResultsOverlayLabel: 'No existen registros para mostrar.',
        groupColumn: (columnName) => `Agrupar por ${columnName.toLowerCase()}`,
        unGroupColumn: () => 'Desagrupar',
      }}
    />
  )
}

export default DataGrid
