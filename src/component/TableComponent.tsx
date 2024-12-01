import { Box, Pagination, Tooltip, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import PropTypes from "prop-types";
import React from "react";
import EditActionIcon from "../assets/action-edit.svg";
import ViewActionIcon from "../assets/action-view.svg";
import NoDataFound from "./NodataFound";
import { ASC_LABEL, DESC_LABEL, EDIT_ICON_LABEL, VISIBILITY_ICON_LABEL } from "../utils/componentUtils";

interface TableHeadCell {
  id: string;
  label: string;
}

interface TableComponentProps {
  tableHead: TableHeadCell[];
  records: Record<string, any>[];
  page: number;
  rowsPerPage?: number;
  handleRowsPerPageChange?: (rowsPerPage: number) => void;
  handlePageChange: (page: number) => void;
  totalRecords: number;
  order: typeof ASC_LABEL | typeof DESC_LABEL;
  setOrder: (order: typeof ASC_LABEL | typeof DESC_LABEL) => void;orderBy: string;
  setOrderBy: (orderBy: string) => void;
  icons?: string[];
  viewIconClickHandler?: (id: string) => void;
  editIconClickHandler?: (id: string) => void;
  rowClickHandler?: (id: string) => void;
  selected?: string[];
  setSelected?: (selected: string[]) => void;
  checkBox?: boolean;
}

interface EnhancedTableHeadProps {
  onRequestSort: (property: string) => void;

  order:  typeof ASC_LABEL | typeof DESC_LABEL;
  orderBy: string;
  tableHead: TableHeadCell[];
}

const EnhancedTableHead = (props: EnhancedTableHeadProps) => {
  const { order, orderBy, tableHead, onRequestSort } = props;
  // let updatedTableHead = [{id:"srNo",label:"S. No"},...tableHead]
  // tableHead = []

  const createSortHandler = (property: string) => {
    console.log("property", property);
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow className="table-headers">
        <TableCell>S. No</TableCell>
        {tableHead.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.id !== "action" ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                //   IconComponent={ArrowDropUpIcon}
                direction={orderBy === headCell.id ? order : ASC_LABEL}
                onClick={() => createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id && (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                )}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf([ASC_LABEL, DESC_LABEL]).isRequired,
  orderBy: PropTypes.string.isRequired,
  tableHead: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  checkBox: PropTypes.bool,
};

const TableComponent = (props: TableComponentProps) => {
  const {
    tableHead,
    records,
    page,
    rowsPerPage = 10,
    handlePageChange,
    totalRecords,
    order,
    setOrder,
    orderBy,
    setOrderBy,
    icons,
    viewIconClickHandler,
    editIconClickHandler,
    rowClickHandler,
    selected = [],
    setSelected,
    checkBox = false,
  } = props;

  // unique Id
  const UNIQUE_ID = "uuid";

  const handleRequestSort = (property: string) => {
    // compare orderby state for order and propery new orderBy value if both are same means user has just changed order property
    // if order state is asc and there change in order state then it must be desc
    const isAsc = orderBy === property && order === ASC_LABEL;
    setOrder(isAsc ? DESC_LABEL : ASC_LABEL);
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!setSelected) return;
    if (event.target.checked) {
      const newSelecteds = records.map((n) => n[UNIQUE_ID]);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown> | null,
    newPage: number
  ) => {
    handlePageChange(newPage);
  };

  const tableRowClickHandler = (event: React.MouseEvent, id: string) => {
    if (rowClickHandler) {
      rowClickHandler(id);
    }
  };
  const visibilityIconClickHandler = (id: string) => {
    if (viewIconClickHandler) viewIconClickHandler(id);
  };
  
  const editIconTableClickHandler = (id: string) => {
    if (editIconClickHandler) editIconClickHandler(id);
  };
  
  const filterObject = (row: Record<string, unknown>) => {
    let newObj: Record<string, unknown> = {};

    tableHead.forEach((obj) => {
      if (Object.keys(row).includes(obj.id)) newObj[obj.id] = row[obj.id];
    });
    newObj[UNIQUE_ID] = row[UNIQUE_ID];

    return newObj;
  };

  const getStatus = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? "Active" : "Inactive";
    } else {
      return value;
    }
  };
  const emptyRows =
    page > 1 ? Math.max(0, page * rowsPerPage - totalRecords) : 0;

  return (
    <Paper sx={{ width: "100%", boxShadow: "none", overflow: "hidden" }}>
      <TableContainer>
        <Table aria-label="sticky table" stickyHeader>
          <EnhancedTableHead
            numSelected={selected.length}
            onRequestSort={handleRequestSort}
            onSelectAllClick={handleSelectAllClick}
            order={order}
            orderBy={orderBy}
            tableHead={tableHead}
            checkBox={checkBox}
          />
          {records?.length > 0 ? (
            <TableBody className="table-body">
              {
                //   stableSort(records, getComparator(order, orderBy))
                //     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

                records.map((row, index) => {
                  return (
                    <TableRow
                      hover
                      onClick={(event: any) =>
                        tableRowClickHandler(event, row[UNIQUE_ID])
                      }
                      role="checkbox"
                      tabIndex={-1}
                      key={row[UNIQUE_ID]}
                    >
                      <TableCell>
                        {(page - 1) * rowsPerPage + index + 1}
                      </TableCell>
                      {Object.keys(filterObject(row)).map((cell, _id) => {
                        const value = row[cell];

                        if (cell !== UNIQUE_ID && cell !== "isActive") {
                          return (
                            <TableCell key={cell}>
                              {typeof value !== "string" ||
                              value?.length <= 20 ? (
                                typeof value !== "object" ? (
                                  value ?? "N/A"
                                ) : (
                                  JSON.stringify(value)
                                )
                              ) : (
                                <Tooltip
                                  key={cell}
                                  placement="bottom-start"
                                  enterDelay={500}
                                  title={value}
                                >
                                  <span>{`${value?.slice(0, 20)}...`}</span>
                                </Tooltip>
                              )}
                            </TableCell>
                          );
                        } else if (cell === "isActive") {
                          return (
                            <TableCell key={cell}>{getStatus(value)}</TableCell>
                          );
                        }
                      })}

                      {icons && icons.length > 0 && (
                        <TableCell
                          style={{
                            position: "sticky",
                            right: "0",
                            background: "#fff",
                          }}
                        >
                          {icons.includes(VISIBILITY_ICON_LABEL) && (
                            <Tooltip
                              placement="bottom-start"
                              enterDelay={500}
                              title="View"
                            >
                              <span
                                onClick={() =>
                                  visibilityIconClickHandler(row[UNIQUE_ID])
                                }
                                className="table-action"
                              >
                                <img
                                  src={ViewActionIcon}
                                  width="21px"
                                  height="21px"
                                />
                              </span>
                            </Tooltip>
                          )}

                          {icons.includes(EDIT_ICON_LABEL) && (
                            <Tooltip
                              placement="bottom-start"
                              enterDelay={500}
                              title="Edit"
                            >
                              <span
                                onClick={() =>
                                  editIconTableClickHandler(row[UNIQUE_ID])
                                }
                                className="table-action"
                              >
                                <img
                                  src={EditActionIcon}
                                  width="21px"
                                  height="21px"
                                />
                                {/* <DeleteIcon
                                onClick={() =>
                                  deleteIconTableClickHandler(row[UNIQUE_ID])
                                }
                              /> */}
                              </span>
                            </Tooltip>
                          )}
                          
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })
              }
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell colSpan={15}>
                  <NoDataFound />
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {records?.length > 0 && (
        <div className="pagination-wrapper">
          <Typography>
            {(page - 1) * rowsPerPage + 1}&nbsp;to&nbsp;
            {(page - 1) * rowsPerPage + records.length} of&nbsp;
            {totalRecords} records
          </Typography>

          <Pagination
            page={page}
            count={Math.ceil(totalRecords / rowsPerPage)}
            onChange={(event, value) => handleChangePage(event, value)}
            variant="outlined"
            shape="rounded"
            className="table-pagination"
          />
        </div>
      )}
    </Paper>
  );
};

TableComponent.propTypes = {
  tableHead: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  records: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number,
  handleRowsPerPageChange: PropTypes.func,
  handlePageChange: PropTypes.func.isRequired,
  totalRecords: PropTypes.number.isRequired,
  order: PropTypes.oneOf([ASC_LABEL, DESC_LABEL]).isRequired,
  setOrder: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired,
  setOrderBy: PropTypes.func.isRequired,
  icons: PropTypes.array,
  viewIconClickHandler: PropTypes.func,
  resetPasswordIconHandler: PropTypes.func,
  editIconClickHandler: PropTypes.func,
  reInviteIconClickHandler: PropTypes.func,
  rowClickHandler: PropTypes.func,
  selected: PropTypes.array,
  setSelected: PropTypes.func,
  checkBox: PropTypes.bool,
};

export default TableComponent;
