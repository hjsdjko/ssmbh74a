package com.dao;

import com.entity.ChimaxinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.ChimaxinxiVO;
import com.entity.view.ChimaxinxiView;


/**
 * 尺码信息
 * 
 * @author 
 * @email 
 * @date 2022-03-16 14:45:49
 */
public interface ChimaxinxiDao extends BaseMapper<ChimaxinxiEntity> {
	
	List<ChimaxinxiVO> selectListVO(@Param("ew") Wrapper<ChimaxinxiEntity> wrapper);
	
	ChimaxinxiVO selectVO(@Param("ew") Wrapper<ChimaxinxiEntity> wrapper);
	
	List<ChimaxinxiView> selectListView(@Param("ew") Wrapper<ChimaxinxiEntity> wrapper);

	List<ChimaxinxiView> selectListView(Pagination page,@Param("ew") Wrapper<ChimaxinxiEntity> wrapper);
	
	ChimaxinxiView selectView(@Param("ew") Wrapper<ChimaxinxiEntity> wrapper);
	

}
