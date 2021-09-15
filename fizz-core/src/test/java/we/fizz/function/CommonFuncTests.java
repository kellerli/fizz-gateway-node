/*
 *  Copyright (C) 2021 the original author or authors.
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
package we.fizz.function;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.noear.snack.ONode;

import we.fizz.input.PathMapping;

/**
 * 
 * @author Francis Dong
 *
 */
class CommonFuncTests {
	
	@Test
	void contextLoads() {
	}
	
	private Map<String, Object> createRecord(String key, Object value) {
		Map<String, Object> m = new HashMap<>();
		m.put(key, value);
		return m;
	}
	
	private ONode getCtxNode() {
		ONode ctxNode = ONode.load(new HashMap());
		
		Map<String, Object> m = new HashMap<>();
		m.put("a", "1");
		m.put("b", "1");
		m.put("d", "");
		
		List<Object> list = new ArrayList<>();
		list.add(createRecord("a", "a1"));
		list.add(createRecord("a", "a2"));
		list.add(createRecord("a", "a3"));
		
		List<Object> list2 = new ArrayList<>();
		
		PathMapping.setByPath(ctxNode, "data.m", m, true);
		PathMapping.setByPath(ctxNode, "data.m2", new HashMap<>(), true);
		PathMapping.setByPath(ctxNode, "data.list", list, true);
		PathMapping.setByPath(ctxNode, "data.list2", list2, true);
		return ctxNode;
	}

	@Test
	void testIif() {
		String funcExpression = "fn.common.iif(true, \"abc\", \"xyz\")";
		Object result = FuncExecutor.getInstance().exec(null, funcExpression);
		assertEquals("abc", result.toString());
	}
	
	
	@Test
	void testIif2() {
		String funcExpression = "fn.common.iif(false, \"abc\", \"xyz\")";
		Object result = FuncExecutor.getInstance().exec(null, funcExpression);
		assertEquals("xyz", result.toString());
	}
	
	@Test
	void testIif3() {
		String funcExpression = "fn.common.iif(false, \"abc\", 123)";
		Long result = (Long)FuncExecutor.getInstance().exec(null, funcExpression);
		assertEquals(123, result.intValue());
	}
	
	@Test
	void testIif4() {
		String funcExpression = "fn.common.iif(false, \"abc\", 123.4)";
		Double result = (Double)FuncExecutor.getInstance().exec(null, funcExpression);
		assertEquals(123.4, result);
	}
	
	@Test
	void testIif5() {
		String funcExpression = "fn.common.iif(false, \"abc\", true)";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(null, funcExpression);
		assertEquals(true, result);
	}
	
	@Test
	void testEquals() {
		String funcExpression = "fn.common.equals(\"abc\", true)";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(null, funcExpression);
		assertEquals(false, result);
	}
	
	@Test
	void testEquals2() {
		String funcExpression = "fn.common.equals(\"abc\", \"abc\")";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(null, funcExpression);
		assertEquals(true, result);
	}
	
	@Test
	void testEquals3() {
		String funcExpression = "fn.common.equals(123, 123)";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(null, funcExpression);
		assertEquals(true, result);
	}
	
	@Test
	void testEquals4() {
		String funcExpression = "fn.common.equals(123, 123.0)";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(null, funcExpression);
		assertEquals(false, result);
	}
	
	@Test
	void testEquals5() {
		String funcExpression = "fn.common.equals(true, true)";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(null, funcExpression);
		assertEquals(true, result);
	}
	
	@Test
	void testEquals6() {
		String funcExpression = "fn.common.equals(123.2, 123.2)";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(null, funcExpression);
		assertEquals(true, result);
	}
	
	@Test
	void testEquals7() {
		String funcExpression = "fn.common.equals(null, 123.2)";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(null, funcExpression);
		assertEquals(false, result);
	}
	
	@Test
	void testEquals8() {
		String funcExpression = "fn.common.equals(null, null)";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(null, funcExpression);
		assertEquals(true, result);
	}
	
	@Test
	void testEquals9() {
		String funcExpression = "fn.common.equals(123, null)";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(null, funcExpression);
		assertEquals(false, result);
	}
	
	@Test
	void testIsNull() {
		ONode ctx = getCtxNode();
		String funcExpression = "fn.common.isNull({data.m.c})";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(ctx, funcExpression);
		assertEquals(true, result);
	}
	
	@Test
	void testIsNotNull() {
		ONode ctx = getCtxNode();
		String funcExpression = "fn.common.isNotNull({data.m.a})";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(ctx, funcExpression);
		assertEquals(true, result);
	}
	
	@Test
	void testIsBlank() {
		ONode ctx = getCtxNode();
		String funcExpression = "fn.common.isBlank({data.m.c})";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(ctx, funcExpression);
		assertEquals(true, result);
	}
	
	@Test
	void testIsNotBlank() {
		ONode ctx = getCtxNode();
		String funcExpression = "fn.common.isNotBlank({data.m.a})";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(ctx, funcExpression);
		assertEquals(true, result);
	}
	
	@Test
	void testIsEmpty() {
		ONode ctx = getCtxNode();
		String funcExpression = "fn.common.isEmpty({data.list2})";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(ctx, funcExpression);
		assertEquals(true, result);
		
		funcExpression = "fn.common.isEmpty({data.m2})";
		result = (Boolean)FuncExecutor.getInstance().exec(ctx, funcExpression);
		assertEquals(true, result);
		
		funcExpression = "fn.common.isEmpty({data.m.x})";
		result = (Boolean)FuncExecutor.getInstance().exec(ctx, funcExpression);
		assertEquals(true, result);
		
		funcExpression = "fn.common.isEmpty({data.m.d})";
		result = (Boolean)FuncExecutor.getInstance().exec(ctx, funcExpression);
		assertEquals(true, result);
	}
	
	@Test
	void testIsNotEmpty() {
		ONode ctx = getCtxNode();
		String funcExpression = "fn.common.isNotEmpty({data.list})";
		Boolean result = (Boolean)FuncExecutor.getInstance().exec(ctx, funcExpression);
		assertEquals(true, result);
		
		funcExpression = "fn.common.isNotEmpty({data.m})";
		result = (Boolean)FuncExecutor.getInstance().exec(ctx, funcExpression);
		assertEquals(true, result);
		
		funcExpression = "fn.common.isNotEmpty({data.m.a})";
		result = (Boolean)FuncExecutor.getInstance().exec(ctx, funcExpression);
		assertEquals(true, result);
		
		funcExpression = "fn.common.isNotEmpty({data.m.y})";
		result = (Boolean)FuncExecutor.getInstance().exec(ctx, funcExpression);
		assertEquals(false, result);
	}
	
}