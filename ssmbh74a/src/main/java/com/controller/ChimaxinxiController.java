package com.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

import com.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.annotation.IgnoreAuth;

import com.entity.ChimaxinxiEntity;
import com.entity.view.ChimaxinxiView;

import com.service.ChimaxinxiService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;

/**
 * 尺码信息
 * 后端接口
 * @author 
 * @email 
 * @date 2022-03-16 14:45:49
 */
@RestController
@RequestMapping("/chimaxinxi")
public class ChimaxinxiController {
    @Autowired
    private ChimaxinxiService chimaxinxiService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,ChimaxinxiEntity chimaxinxi, 
		HttpServletRequest request){

        EntityWrapper<ChimaxinxiEntity> ew = new EntityWrapper<ChimaxinxiEntity>();
		PageUtils page = chimaxinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, chimaxinxi), params), params));
        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,ChimaxinxiEntity chimaxinxi, 
		HttpServletRequest request){
        EntityWrapper<ChimaxinxiEntity> ew = new EntityWrapper<ChimaxinxiEntity>();
		PageUtils page = chimaxinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, chimaxinxi), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( ChimaxinxiEntity chimaxinxi){
       	EntityWrapper<ChimaxinxiEntity> ew = new EntityWrapper<ChimaxinxiEntity>();
      	ew.allEq(MPUtil.allEQMapPre( chimaxinxi, "chimaxinxi")); 
        return R.ok().put("data", chimaxinxiService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(ChimaxinxiEntity chimaxinxi){
        EntityWrapper< ChimaxinxiEntity> ew = new EntityWrapper< ChimaxinxiEntity>();
 		ew.allEq(MPUtil.allEQMapPre( chimaxinxi, "chimaxinxi")); 
		ChimaxinxiView chimaxinxiView =  chimaxinxiService.selectView(ew);
		return R.ok("查询尺码信息成功").put("data", chimaxinxiView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        ChimaxinxiEntity chimaxinxi = chimaxinxiService.selectById(id);
        return R.ok().put("data", chimaxinxi);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        ChimaxinxiEntity chimaxinxi = chimaxinxiService.selectById(id);
        return R.ok().put("data", chimaxinxi);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody ChimaxinxiEntity chimaxinxi, HttpServletRequest request){
    	chimaxinxi.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(chimaxinxi);

        chimaxinxiService.insert(chimaxinxi);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody ChimaxinxiEntity chimaxinxi, HttpServletRequest request){
    	chimaxinxi.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(chimaxinxi);

        chimaxinxiService.insert(chimaxinxi);
        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody ChimaxinxiEntity chimaxinxi, HttpServletRequest request){
        //ValidatorUtils.validateEntity(chimaxinxi);
        chimaxinxiService.updateById(chimaxinxi);//全部更新
        return R.ok();
    }
    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        chimaxinxiService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
    /**
     * 提醒接口
     */
	@RequestMapping("/remind/{columnName}/{type}")
	public R remindCount(@PathVariable("columnName") String columnName, HttpServletRequest request, 
						 @PathVariable("type") String type,@RequestParam Map<String, Object> map) {
		map.put("column", columnName);
		map.put("type", type);
		
		if(type.equals("2")) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Calendar c = Calendar.getInstance();
			Date remindStartDate = null;
			Date remindEndDate = null;
			if(map.get("remindstart")!=null) {
				Integer remindStart = Integer.parseInt(map.get("remindstart").toString());
				c.setTime(new Date()); 
				c.add(Calendar.DAY_OF_MONTH,remindStart);
				remindStartDate = c.getTime();
				map.put("remindstart", sdf.format(remindStartDate));
			}
			if(map.get("remindend")!=null) {
				Integer remindEnd = Integer.parseInt(map.get("remindend").toString());
				c.setTime(new Date());
				c.add(Calendar.DAY_OF_MONTH,remindEnd);
				remindEndDate = c.getTime();
				map.put("remindend", sdf.format(remindEndDate));
			}
		}
		
		Wrapper<ChimaxinxiEntity> wrapper = new EntityWrapper<ChimaxinxiEntity>();
		if(map.get("remindstart")!=null) {
			wrapper.ge(columnName, map.get("remindstart"));
		}
		if(map.get("remindend")!=null) {
			wrapper.le(columnName, map.get("remindend"));
		}


		int count = chimaxinxiService.selectCount(wrapper);
		return R.ok().put("count", count);
	}
	







}
