import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './admin/models/admin.model';
import { OwnerModule } from './owner/owner.module';
import { UserModule } from './user/user.module';
import { DeliverymanModule } from './deliveryman/deliveryman.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { PhotoModule } from './photo/photo.module';
import { TypeModule } from './type/type.module';
import { StatusModule } from './status/status.module';
import { StockModule } from './stock/stock.module';
import { ProductOrderModule } from './product_order/product_order.module';
import { OrderModule } from './order/order.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { MedproductModule } from './medproduct/medproduct.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env`, isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [Admin],
      autoLoadModels: true,
      logging: false,
    }),
    AdminModule,
    MailModule,
    OwnerModule,
    UserModule,
    DeliverymanModule,
    RegionModule,
    DistrictModule,
    PhotoModule,
    TypeModule,
    StatusModule,
    StockModule,
    ProductOrderModule,
    OrderModule,
    PharmacyModule,
    MedproductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
