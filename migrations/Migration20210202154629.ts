import { Migration } from '@mikro-orm/migrations';

export class Migration20210202154629 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `born` json null, `my_custom_type` json null) default character set utf8mb4 engine = InnoDB;');
  }

}
