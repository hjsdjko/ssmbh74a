package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.ChimaxinxiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.ChimaxinxiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.ChimaxinxiView;


/**
 * 尺码信息
 *
 * @author 
 * @email 
 * @date 2022-03-16 14:45:49
 */
public interface ChimaxinxiService extends IService<ChimaxinxiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ChimaxinxiVO> selectListVO(Wrapper<ChimaxinxiEntity> wrapper);
   	
   	ChimaxinxiVO selectVO(@Param("ew") Wrapper<ChimaxinxiEntity> wrapper);
   	
   	List<ChimaxinxiView> selectListView(Wrapper<ChimaxinxiEntity> wrapper);
   	
   	ChimaxinxiView selectView(@Param("ew") Wrapper<ChimaxinxiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ChimaxinxiEntity> wrapper);
   	

}

