
-- 在 test_json 中插入多条JSON数组数据记录
-- @link https://blog.csdn.net/u012660464/article/details/75529216;
INSERT INTO test_json (tags) VALUES ('["frank","mike"]'),('["frank","jake"]'),('["joun","nice"]');

-- 查询 test_tag 字段中包含 frank 字段的JSON数组记录
-- @link https://blog.csdn.net/qq_21187515/article/details/90760337
SELECT * FROM test_json WHERE JSON_SEARCH(tags,"one","frank");

-- 查询 test_tag 字段中 JSON对象 a 的属性值 >=1 的记录;
-- @link https://blog.csdn.net/qq_21187515/article/details/90760337
SELECT * FROM test_json WHERE tags->"$.a">=1;