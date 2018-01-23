Vim�UnDo� ЌI�W�\�k� �E��񥲁X��F�*2   a                                   Z��     _�                              ����                                                                                                                                                                                                                                                                                                                                      :          V       Z��     �               a   <?php       'namespace DoctrineORMModule\Migrations;       /use Doctrine\DBAL\Migrations\AbstractMigration;    use Doctrine\DBAL\Schema\Schema;       /**   9 * Auto-generated Migration: Please modify to your needs!    */   5class Version20171129102939 extends AbstractMigration   {       /**        * @param Schema $schema        */   &    public function up(Schema $schema)       {   P        // this up() migration is auto-generated, please modify it to your needs   �        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'oracle', 'Migration can only be executed safely on \'oracle\'.');       o        $this->addSql('CREATE SEQUENCE DG_VIDEO_EXTERNAL_IDS_ID_EXTER START WITH 1 MINVALUE 1 INCREMENT BY 1');   d        $this->addSql('CREATE SEQUENCE DG_SALE_ID_SALE_seq START WITH 1 MINVALUE 1 INCREMENT BY 1');   n        $this->addSql('CREATE SEQUENCE DG_VIDEO_LOG_ID_VIDEO_LOG_seq START WITH 1 MINVALUE 1 INCREMENT BY 1');   �        $this->addSql('CREATE TABLE DG_VIDEO_CATEGORY (ID_CATEGORY VARCHAR2(255) NOT NULL, LABEL VARCHAR2(255) DEFAULT NULL NULL, PRIMARY KEY(ID_CATEGORY))');   �        $this->addSql('CREATE TABLE DG_VIDEO_CHANNEL (ID_CHANNEL VARCHAR2(255) NOT NULL, LABEL VARCHAR2(255) DEFAULT NULL NULL, PRIMARY KEY(ID_CHANNEL))');   �        $this->addSql('CREATE TABLE DG_JOIN_CHANNELS_REGIONS (ID_CHANNEL VARCHAR2(255) NOT NULL, ID_REGION VARCHAR2(255) NOT NULL, PRIMARY KEY(ID_CHANNEL, ID_REGION))');   d        $this->addSql('CREATE INDEX IDX_44C09B528E8D585E ON DG_JOIN_CHANNELS_REGIONS (ID_CHANNEL)');   c        $this->addSql('CREATE INDEX IDX_44C09B52A22A63E8 ON DG_JOIN_CHANNELS_REGIONS (ID_REGION)');          $this->addSql('CREATE TABLE DG_VIDEO_EXTERNAL_IDS (ID_EXTERNAL_IDS VARCHAR2(255) NOT NULL, ALLO_CINE_ID NUMBER(20) DEFAULT NULL NULL, CNC_VISA_ID NUMBER(20) DEFAULT NULL NULL, ISAN VARCHAR2(255) DEFAULT NULL NULL, LEGACY_ID VARCHAR2(255) DEFAULT NULL NULL, OSCAR_ID VARCHAR2(255) DEFAULT NULL NULL, SVOD_ID NUMBER(20) DEFAULT NULL NULL, PLURIMEDIA_BROADCAST_ID NUMBER(20) DEFAULT NULL NULL, PLURIMEDIA_PROGRAM_ID NUMBER(20) DEFAULT NULL NULL, ID_PLURIMEDIA_IDS CLOB DEFAULT NULL NULL, PRIMARY KEY(ID_EXTERNAL_IDS))');   q        $this->addSql('COMMENT ON COLUMN DG_VIDEO_EXTERNAL_IDS.ID_PLURIMEDIA_IDS IS \'(DC2Type:simple_array)\'');          $this->addSql('CREATE TABLE DG_VIDEO_GROUP (ID_GROUP VARCHAR2(255) NOT NULL, LABEL VARCHAR2(255) DEFAULT NULL NULL, DESCRIPTION VARCHAR2(255) DEFAULT NULL NULL, SEASON_NUMBER NUMBER(10) DEFAULT NULL NULL, NUMBER_OF_EPISODES NUMBER(10) DEFAULT NULL NULL, PRIMARY KEY(ID_GROUP))');   �        $this->addSql('CREATE TABLE DG_VIDEO_RATING (ID_RATING VARCHAR2(255) NOT NULL, LABEL VARCHAR2(255) DEFAULT NULL NULL, PRIMARY KEY(ID_RATING))');   �        $this->addSql('CREATE TABLE DG_VIDEO_REGION (ID_REGION VARCHAR2(255) NOT NULL, LABEL VARCHAR2(255) DEFAULT NULL NULL, CODE VARCHAR2(255) DEFAULT NULL NULL, TIM_ZONE VARCHAR2(255) DEFAULT NULL NULL, PRIMARY KEY(ID_REGION))');   �        $this->addSql('CREATE TABLE DG_SALE (ID_SALE NUMBER(10) NOT NULL, TITLE VARCHAR2(255) NOT NULL, BROADCAST_START TIMESTAMP(0) NOT NULL, BROADCAST_END TIMESTAMP(0) DEFAULT NULL NULL, COMMENTS VARCHAR2(255) DEFAULT NULL NULL, PRIMARY KEY(ID_SALE))');   �        $this->addSql('CREATE TABLE DG_VIDEO_TAG (ID_TAG VARCHAR2(255) NOT NULL, LABEL VARCHAR2(255) DEFAULT NULL NULL, DESCRIPTION CLOB DEFAULT NULL NULL, PRIMARY KEY(ID_TAG))');   �        $this->addSql('CREATE TABLE DG_VIDEO_TYPE (ID_TYPE VARCHAR2(255) NOT NULL, LABEL VARCHAR2(255) DEFAULT NULL NULL, PRIMARY KEY(ID_TYPE))');  �        $this->addSql('CREATE TABLE DG_VIDEO (ID_VIDEO VARCHAR2(255) NOT NULL, JSON CLOB NOT NULL, CREATED_AT TIMESTAMP(0) DEFAULT NULL NULL, CREATED_BY VARCHAR2(255) DEFAULT NULL NULL, CREATED_VIA VARCHAR2(255) DEFAULT NULL NULL, UPDATED_AT TIMESTAMP(0) DEFAULT NULL NULL, ADDITIONAL_TITLE VARCHAR2(255) DEFAULT NULL NULL, ALLOCINE_PRESS_START DOUBLE PRECISION DEFAULT NULL NULL, ALLOCINE_USERS_START DOUBLE PRECISION DEFAULT NULL NULL, BROADCASTED_AT VARCHAR2(255) DEFAULT NULL NULL, BROADCASTED_LIVE NUMBER(1) DEFAULT NULL NULL, COPYRIGHT VARCHAR2(255) DEFAULT NULL NULL, DESCRIPTION CLOB DEFAULT NULL NULL, DRM NUMBER(1) DEFAULT NULL NULL, DURATION VARCHAR2(255) DEFAULT NULL NULL, EMBEDDABLE NUMBER(1) DEFAULT NULL NULL, EPISODE_NUMBER NUMBER(10) DEFAULT NULL NULL, EXPECTED_AT TIMESTAMP(0) DEFAULT NULL NULL, EXPECTED_DURATION VARCHAR2(255) DEFAULT NULL NULL, LICENSING VARCHAR2(255) DEFAULT NULL NULL, MIDROLLABLE NUMBER(1) DEFAULT NULL NULL, BACTIF NUMBER(1) NOT NULL, ID_TYPE VARCHAR2(255) DEFAULT NULL NULL, ID_CATEGORY VARCHAR2(255) DEFAULT NULL NULL, ID_EXTERNAL_IDS VARCHAR2(255) DEFAULT NULL NULL, ID_RATING VARCHAR2(255) DEFAULT NULL NULL, PRIMARY KEY(ID_VIDEO))');   Q        $this->addSql('CREATE INDEX IDX_F9300D2AF97A9A35 ON DG_VIDEO (ID_TYPE)');   U        $this->addSql('CREATE INDEX IDX_F9300D2A5965E51F ON DG_VIDEO (ID_CATEGORY)');   a        $this->addSql('CREATE UNIQUE INDEX UNIQ_F9300D2A8390DC4A ON DG_VIDEO (ID_EXTERNAL_IDS)');   S        $this->addSql('CREATE INDEX IDX_F9300D2A75C1B4BC ON DG_VIDEO (ID_RATING)');   �        $this->addSql('CREATE TABLE DG_JOIN_VIDEOS_GROUPS (ID_VIDEO VARCHAR2(255) NOT NULL, ID_GROUP VARCHAR2(255) NOT NULL, PRIMARY KEY(ID_VIDEO, ID_GROUP))');   _        $this->addSql('CREATE INDEX IDX_5C44F19D53DD0266 ON DG_JOIN_VIDEOS_GROUPS (ID_VIDEO)');   _        $this->addSql('CREATE INDEX IDX_5C44F19D42DA9C8F ON DG_JOIN_VIDEOS_GROUPS (ID_GROUP)');   �        $this->addSql('CREATE TABLE dg_join_videos_tags (ID_VIDEO VARCHAR2(255) NOT NULL, ID_TAG VARCHAR2(255) NOT NULL, PRIMARY KEY(ID_VIDEO, ID_TAG))');   ]        $this->addSql('CREATE INDEX IDX_37BB18C853DD0266 ON dg_join_videos_tags (ID_VIDEO)');   [        $this->addSql('CREATE INDEX IDX_37BB18C8CDE73761 ON dg_join_videos_tags (ID_TAG)');  ?        $this->addSql('CREATE TABLE DG_VIDEO_LOG (ID_VIDEO_LOG NUMBER(10) NOT NULL, ID_VIDEO VARCHAR2(255) NOT NULL, JSON CLOB DEFAULT NULL NULL, METHOD VARCHAR2(255) DEFAULT NULL NULL, HTTP_ERROR NUMBER(10) NOT NULL, MESSAGE VARCHAR2(255) DEFAULT NULL NULL, CREATED TIMESTAMP(0) NOT NULL, PRIMARY KEY(ID_VIDEO_LOG))');   �        $this->addSql('ALTER TABLE DG_JOIN_CHANNELS_REGIONS ADD CONSTRAINT FK_44C09B528E8D585E FOREIGN KEY (ID_CHANNEL) REFERENCES DG_VIDEO_CHANNEL (ID_CHANNEL)');   �        $this->addSql('ALTER TABLE DG_JOIN_CHANNELS_REGIONS ADD CONSTRAINT FK_44C09B52A22A63E8 FOREIGN KEY (ID_REGION) REFERENCES DG_VIDEO_REGION (ID_REGION)');   �        $this->addSql('ALTER TABLE DG_VIDEO ADD CONSTRAINT FK_F9300D2AF97A9A35 FOREIGN KEY (ID_TYPE) REFERENCES DG_VIDEO_TYPE (ID_TYPE)');   �        $this->addSql('ALTER TABLE DG_VIDEO ADD CONSTRAINT FK_F9300D2A5965E51F FOREIGN KEY (ID_CATEGORY) REFERENCES DG_VIDEO_CATEGORY (ID_CATEGORY)');   �        $this->addSql('ALTER TABLE DG_VIDEO ADD CONSTRAINT FK_F9300D2A8390DC4A FOREIGN KEY (ID_EXTERNAL_IDS) REFERENCES DG_VIDEO_EXTERNAL_IDS (ID_EXTERNAL_IDS)');   �        $this->addSql('ALTER TABLE DG_VIDEO ADD CONSTRAINT FK_F9300D2A75C1B4BC FOREIGN KEY (ID_RATING) REFERENCES DG_VIDEO_RATING (ID_RATING)');   �        $this->addSql('ALTER TABLE DG_JOIN_VIDEOS_GROUPS ADD CONSTRAINT FK_5C44F19D53DD0266 FOREIGN KEY (ID_VIDEO) REFERENCES DG_VIDEO (ID_VIDEO)');   �        $this->addSql('ALTER TABLE DG_JOIN_VIDEOS_GROUPS ADD CONSTRAINT FK_5C44F19D42DA9C8F FOREIGN KEY (ID_GROUP) REFERENCES DG_VIDEO_GROUP (ID_GROUP)');   �        $this->addSql('ALTER TABLE dg_join_videos_tags ADD CONSTRAINT FK_37BB18C853DD0266 FOREIGN KEY (ID_VIDEO) REFERENCES DG_VIDEO (ID_VIDEO)');   �        $this->addSql('ALTER TABLE dg_join_videos_tags ADD CONSTRAINT FK_37BB18C8CDE73761 FOREIGN KEY (ID_TAG) REFERENCES DG_VIDEO_TAG (ID_TAG)');       }           /**        * @param Schema $schema        */   (    public function down(Schema $schema)       {   R        // this down() migration is auto-generated, please modify it to your needs   �        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'oracle', 'Migration can only be executed safely on \'oracle\'.');       R        $this->addSql('ALTER TABLE DG_VIDEO DROP CONSTRAINT FK_F9300D2A5965E51F');   b        $this->addSql('ALTER TABLE DG_JOIN_CHANNELS_REGIONS DROP CONSTRAINT FK_44C09B528E8D585E');   R        $this->addSql('ALTER TABLE DG_VIDEO DROP CONSTRAINT FK_F9300D2A8390DC4A');   _        $this->addSql('ALTER TABLE DG_JOIN_VIDEOS_GROUPS DROP CONSTRAINT FK_5C44F19D42DA9C8F');   R        $this->addSql('ALTER TABLE DG_VIDEO DROP CONSTRAINT FK_F9300D2A75C1B4BC');   b        $this->addSql('ALTER TABLE DG_JOIN_CHANNELS_REGIONS DROP CONSTRAINT FK_44C09B52A22A63E8');   ]        $this->addSql('ALTER TABLE dg_join_videos_tags DROP CONSTRAINT FK_37BB18C8CDE73761');   R        $this->addSql('ALTER TABLE DG_VIDEO DROP CONSTRAINT FK_F9300D2AF97A9A35');   _        $this->addSql('ALTER TABLE DG_JOIN_VIDEOS_GROUPS DROP CONSTRAINT FK_5C44F19D53DD0266');   ]        $this->addSql('ALTER TABLE dg_join_videos_tags DROP CONSTRAINT FK_37BB18C853DD0266');   F        $this->addSql('DROP SEQUENCE DG_VIDEO_EXTERNAL_IDS_ID_EXTER');   ;        $this->addSql('DROP SEQUENCE DG_SALE_ID_SALE_seq');   E        $this->addSql('DROP SEQUENCE DG_VIDEO_LOG_ID_VIDEO_LOG_seq');   6        $this->addSql('DROP TABLE DG_VIDEO_CATEGORY');   5        $this->addSql('DROP TABLE DG_VIDEO_CHANNEL');   =        $this->addSql('DROP TABLE DG_JOIN_CHANNELS_REGIONS');   :        $this->addSql('DROP TABLE DG_VIDEO_EXTERNAL_IDS');   3        $this->addSql('DROP TABLE DG_VIDEO_GROUP');   4        $this->addSql('DROP TABLE DG_VIDEO_RATING');   4        $this->addSql('DROP TABLE DG_VIDEO_REGION');   ,        $this->addSql('DROP TABLE DG_SALE');   1        $this->addSql('DROP TABLE DG_VIDEO_TAG');   2        $this->addSql('DROP TABLE DG_VIDEO_TYPE');   -        $this->addSql('DROP TABLE DG_VIDEO');   :        $this->addSql('DROP TABLE DG_JOIN_VIDEOS_GROUPS');   8        $this->addSql('DROP TABLE dg_join_videos_tags');   1        $this->addSql('DROP TABLE DG_VIDEO_LOG');       }   }5��