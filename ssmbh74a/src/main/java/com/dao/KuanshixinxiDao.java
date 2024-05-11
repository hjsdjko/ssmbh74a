package com.dao;

import com.entity.KuanshixinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.KuanshixinxiVO;
import com.entity.view.KuanshixinxiView;


/**
 * 款式信息
 * 
 * @author 
 * @email 
 * @date 2022-03-16 14:45:49
 */
public interface KuanshixinxiDao extends BaseMapper<KuanshixinxiEntity> {
	
	List<KuanshixinxiVO> selectListVO(@Param("ew") Wrapper<KuanshixinxiEntity> wrapper);
	
	KuanshixinxiVO selectVO(@Param("ew") Wrapper<KuanshixinxiEntity> wrapper);
	
	List<KuanshixinxiView> selectListView(@Param("ew") Wrapper<KuanshixinxiEntity> wrapper);

	List<KuanshixinxiView> selectListView(Pagination page,@Param("ew") Wrapper<KuanshixinxiEntity> wrapper);
	
	KuanshixinxiView selectView(@Param("ew") Wrapper<KuanshixinxiEntity> wrapper);
	

}
