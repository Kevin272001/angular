
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { PersonaModule } from './modules/persona/persona.module';
import { ProductoModule } from './modules/producto/producto.module';
import { RoleModule } from './modules/role/role.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { PedidoModule } from './modules/pedido/pedido.module';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule, ConfigModule, CategoriaModule, PersonaModule, ProductoModule, RoleModule, ClienteModule, PedidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
function Module(arg0: { imports: (typeof AuthModule)[]; controllers: (typeof AppController)[]; providers: (typeof AppService)[]; }): (target: typeof AppModule) => void | typeof AppModule {
  throw new Error('Function not implemented.');
}

