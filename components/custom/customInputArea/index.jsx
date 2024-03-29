import styles from "./customInput.module.scss";

const CustomInput1 = ({ label, explain, placeholder }) => {
  return (
    <div className={styles.twoCol}>
      <div>
        <h2 style={{ marginBottom: "10px", color: "#364254" }}>{label}</h2>
        <div className={styles.inputWidRtl}>
          <textarea
            name=""
            id=""
            placeholder={placeholder}
            cols="30"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div>
        <h4 className={styles.explain}>{explain}</h4>
      </div>
    </div>
  );
};
// export
export default CustomInput1;
