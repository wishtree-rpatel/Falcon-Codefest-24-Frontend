import React, { useEffect } from "react";
import TableComponent from "../TableComponent";
import {
  ASC_LABEL,
  DELETE_ICON_LABEL,
  DESC_LABEL,
  EDIT_ICON_LABEL,
  RESET_PASSWORD_ICON_LABEL,
  RE_INVITE_ICON_LABEL,
  VISIBILITY_ICON_LABEL,
} from "../../utils/componentUtils";

const tableHead = [
  {
    id: "operationalMember",
    label: "Operational Member",
  },
  {
    id: "emailId",
    label: "Email Id",
  },
  {
    id: "assessments",
    label: "Assessments",
  },
  {
    id: "createdOn",
    label: "Created On",
  },
  {
    id: "status",
    label: "Status",
  },
  {
    id: "action",
    label: "Action",
  },
];

//Array of Object (idealy we will get this data from backend)
const rows = [
  {
    uuid: "1",
    assessments: { name: "external" },
    operationalMember:
      "jeff Hall rd Meaning rd Meaning rd Meaning rd Meaning rd Meaning rd Meaningrd Meaning rd Meaningrd Meaningvrd Meaning",
    emailId: "jeffbezoz@gmail.com",
    countryCode: "+91",
    phoneNumber: "90343242433",
    number: 89,
    status: "internal",
    createdOn: new Date().toLocaleDateString("en-GB"),
    createdBy: "rajkumar",
    updatedAt: new Date().toLocaleDateString("en-GB"),
  },
  {
    uuid: "2",
    emailId: "EdwardMeaning53@gmail.com",
    operationalMember: "Edward Meaning",
    assessments: "internal",
    createdOn: new Date().toLocaleDateString("en-GB"),
    status: "inactive",
    createdBy: "rajkumar",
    updatedAt: new Date().toLocaleDateString("en-GB"),
  },
  {
    uuid: "3",
    operationalMember: "William Johnsan",
    assessments: "External",
    emailId: "WillianJohn4509@gmail.com",
    createdOn: new Date().toLocaleDateString("en-GB"),
    status: "active",
    createdBy: "rajkumar",
    updatedAt: new Date().toLocaleDateString("en-GB"),
  },
  {
    operationalMember: "harry brook ",
    uuid: "4",
    emailId: "hrbrook@zero.com",
    status: "active",
    createdOn: new Date().toLocaleDateString("en-GB"),
    createdBy: "rajkumar",
    updatedAt: new Date().toLocaleDateString("en-GB"),
    assessments: "Internal",
  },
  {
    operationalMember: "Kamla joshi",
    uuid: "5",
    updatedAt: new Date().toLocaleDateString("en-GB"),
    emailId: "kamla.joshi@gmail.com",
    assessments: "internal",
    createdBy: "rajkumar",
    createdOn: new Date().toLocaleDateString("en-GB"),
    status: "Inactive",
  },
  {
    uuid: "7",
    operationalMember: "Edward Meaning",
    emailId: "EdwardMeaning53@gmail.com",
    updatedAt: new Date().toLocaleDateString("en-GB"),
    assessments: "internal",
    createdOn: new Date().toLocaleDateString("en-GB"),
    status: "inactive",
    createdBy: "rajkumar",
  },
  {
    uuid: "6",
    operationalMember:
      "jeff Hall rd Meaning rd Meaning rd Meaning rd Meaning rd Meaning rd Meaningrd Meaning rd Meaningrd Meaningvrd Meaning",
    assessments: "internal",
    emailId: "jeffbezoz@gmail.com",
    createdOn: new Date().toLocaleDateString("en-GB"),
    status: "active",
    createdBy: "rajkumar",
    updatedAt: new Date().toLocaleDateString("en-GB"),
  },
  {
    uuid: "9",
    operationalMember: "harry robot ",
    emailId: "harrykakaji3209@zero.com",
    assessments: "External",
    status: "active",
    createdOn: new Date().toLocaleDateString("en-GB"),
    createdBy: "rajkumar",
    updatedAt: new Date().toLocaleDateString("en-GB"),
  },
  {
    uuid: "8",
    operationalMember: "William Johnsan ",
    emailId: "WillianJohnbhai4509@gmail.com",
    status: "active",
    assessments: "External",
    createdOn: new Date().toLocaleDateString("en-GB"),
    updatedAt: new Date().toLocaleDateString("en-GB"),
    createdBy: "rajkumar",
  },
  {
    uuid: "10",
    operationalMember: "Krishana goswami",
    emailId: "krishnagoswami@gmail.com",
    assessments: "internal",
    createdOn: new Date().toLocaleDateString("en-GB"),
    updatedAt: new Date().toLocaleDateString("en-GB"),
    status: "Active",
    createdBy: "hetkumar",
  },
  {
    uuid: "11",
    emailId: "brandan.cric@gmail.com",
    operationalMember: "Brendan",
    assessments: "internal",
    createdBy: "rajkumar",
    status: "Active",
    createdOn: new Date().toLocaleDateString("en-GB"),
    updatedAt: new Date().toLocaleDateString("en-GB"),
  },
];
const InvokeTable: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [order, setOrder] = React.useState<
   typeof  ASC_LABEL | typeof DESC_LABEL
  >(ASC_LABEL);
  const [orderBy, setOrderBy] = React.useState("operationalMember");

  //   Method will invoke when there's page change
  //   you'll get updated page number as argument set this in page state
  const handleMemberListPageChange = (newPage: number) => {
    console.log("new Page", newPage);
    setPage(newPage);
  };

  const viewIconClickHandler = (id: string) => {
    console.log("id", id);
  };

  const rowClickHandler = (id: string) => {
    console.log(id);
  };

  const resetPasswordIconHandler = (id: string) => {
    console.log("member on Delete click", id);
  };

  //   Logic for pagination, no need to do it here, as we handle pagination from backend
  let records = rows.slice((page - 1) * 10, page * 10);
  const tempRows = [...records];

  useEffect(() => {
    // add method which will execute when there's change in one of the useEffect dependancy

    console.log("order by", orderBy, "order", order, "select");
  }, [order, page, orderBy]);

  return (
    <TableComponent
      tableHead={tableHead}
      records={records}
      handlePageChange={handleMemberListPageChange}
      page={page}
      totalRecords={rows.length}
      order={order}
      orderBy={orderBy}
      icons={[
        VISIBILITY_ICON_LABEL,
        RESET_PASSWORD_ICON_LABEL,
        EDIT_ICON_LABEL,
        RE_INVITE_ICON_LABEL,
      ]}
      viewIconClickHandler={viewIconClickHandler}
      resetPasswordIconHandler={resetPasswordIconHandler}
      rowClickHandler={rowClickHandler}
      setOrder={setOrder}
      setOrderBy={setOrderBy}
    />
  );
};

export default InvokeTable;
