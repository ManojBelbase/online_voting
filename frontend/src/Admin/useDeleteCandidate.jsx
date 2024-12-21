import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { CANDIDATE_API_END_POINT } from "../utils/Constant";
import { useNavigate } from "react-router";

const useDeleteCandidate = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const deleteCandidate = async (candidateId) => {
    console.log(candidateId);
    try {
      const response = await axios.delete(
        `${CANDIDATE_API_END_POINT}/delete/${candidateId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        console.log(response.data);
      }

      navigate("/candidates");
      window.location.reload();
    } catch (error) {
      console.error("Error while deleting candidate:", error);
    }
  };

  return deleteCandidate;
};

export default useDeleteCandidate;
