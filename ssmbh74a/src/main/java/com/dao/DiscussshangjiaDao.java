package com.dao;

import com.entity.DiscussshangjiaEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DiscussshangjiaVO;
import com.entity.view.DiscussshangjiaView;


/**
 * 商家评论表
 * 
 * @author 
 * @email 
 * @date 2022-03-16 14:45:49
 */
public interface DiscussshangjiaDao extends BaseMapper<DiscussshangjiaEntity> {
	
	List<DiscussshangjiaVO> selectListVO(@Param("ew") Wrapper<DiscussshangjiaEntity> wrapper);
	
	DiscussshangjiaVO selectVO(@Param("ew") Wrapper<DiscussshangjiaEntity> wrapper);
	
	List<DiscussshangjiaView> selectListView(@Param("ew") Wrapper<DiscussshangjiaEntity> wrapper);

	List<DiscussshangjiaView> selectListView(Pagination page,@Param("ew") Wrapper<DiscussshangjiaEntity> wrapper);
	
	DiscussshangjiaView selectView(@Param("ew") Wrapper<DiscussshangjiaEntity> wrapper);
	

}
