const faker = require('faker');
const stringify = require('json-beautify');
const { writeFileSync } = require('fs');
const {v4: uuidv4} = require('uuid');

writeFileSync('./data/comments.json', stringify([], null, 2, 100));

const randomNum = (from, to) => Math.round(Math.random() * (to - from)) + from;

const data = Array(10)
              .fill(null)
              .map(_ => {
                const comment_id = uuidv4();
                const replies_count = randomNum(1, 5);
                return {
                  id: comment_id,
                  author: `${faker.name.firstName()} ${faker.name.lastName()}`,
                  body: [faker.lorem.paragraph, faker.lorem.sentence][randomNum(0, 1)].call(),
                  postedAt: +faker.date.recent(),
                  replies_count: replies_count,
                  replies: Array(replies_count)
                            .fill(null)
                            .map(() => ({
                              id: uuidv4(),
                              comment_id: comment_id,
                              author: `${faker.name.firstName()} ${faker.name.lastName()}`,
                              body: [faker.lorem.paragraph, faker.lorem.sentence][randomNum(0, 1)].call(),
                              postedAt: +faker.date.recent()
                            }))
                };
              });

writeFileSync('./data/comments.json', stringify(data, null, 2, 100));