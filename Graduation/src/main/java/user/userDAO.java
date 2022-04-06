package user;

import java.sql.Connection;
import java.sql.PreparedStatement;

import util.DatabaseUtil;

public class userDAO {
	
	public int join(String firstName,String Name,String userID,String userPassWord,String userPassWord2) {
		String SQL = "INSERT INTO user VALUES(?, ?, ?, ?, ?)";
		try {
			Connection conn = DatabaseUtil.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, firstName);
			pstmt.setString(2, Name);
			pstmt.setString(3, userID);
			pstmt.setString(4, userPassWord);
			pstmt.setString(5, userPassWord2);
			
			return pstmt.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return -1;
	}

}
