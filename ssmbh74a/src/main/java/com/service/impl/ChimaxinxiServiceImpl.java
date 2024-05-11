package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.ChimaxinxiDao;
import com.entity.ChimaxinxiEntity;
import com.service.ChimaxinxiService;
import com.entity.vo.ChimaxinxiVO;
import com.entity.view.ChimaxinxiView;

@Service("chimaxinxiService")
public class ChimaxinxiServiceImpl extends ServiceImpl<ChimaxinxiDao, ChimaxinxiEntity> implements ChimaxinxiService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ChimaxinxiEntity> page = this.selectPage(
                new Query<ChimaxinxiEntity>(params).getPage(),
                new EntityWrapper<ChimaxinxiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ChimaxinxiEntity> wrapper) {
		  Page<ChimaxinxiView> page =new Query<ChimaxinxiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<ChimaxinxiVO> selectListVO(Wrapper<ChimaxinxiEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public ChimaxinxiVO selectVO(Wrapper<ChimaxinxiEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<ChimaxinxiView> selectListView(Wrapper<ChimaxinxiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ChimaxinxiView selectView(Wrapper<ChimaxinxiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
