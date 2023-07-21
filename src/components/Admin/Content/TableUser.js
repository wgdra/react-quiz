const TableUser = (props) => {
  const {
    listUser,
    handleShowViewUser,
    handleShowUpdateUser,
    handleShowDeleteUser,
  } = props;

  return (
    <>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Tên</th>
            <th scope="col">Email</th>
            <th scope="col">Tài Khoản</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listUser && listUser.length > 0 ? (
            listUser.map((item, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td hidden>{item.image}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleShowViewUser(item)}
                    >
                      Chi tiết
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleShowUpdateUser(item)}
                    >
                      Sửa
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleShowDeleteUser()}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={"5"}>
                <span className="d-flex justify-content-center text-danger">
                  KHÔNG NHẬN ĐƯỢC DỮ LIỆU
                </span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default TableUser;
