import { Entity, Column, DeleteDateColumn } from 'typeorm';

@Entity()
export class User {
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  foto_perfil: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column({ nullable: true })
  edad: number;

  @Column({ nullable: true })
  genero: string;

  @Column({ nullable: true })
  fecha_nacimiento: string;

  @Column({ unique: true, nullable: true })
  dni: number;

  @Column({ nullable: true })
  telefono: string;

  @Column({ nullable: true })
  score_crediticio: number;
  //   @Column()
  //   historial_juntas: object[];
  //   @Column()
  //   amigos: object[];
  @Column({ nullable: true })
  fecha_creacion: string;

  @Column({ nullable: true })
  status: string;

  @Column({ default: 'user' })
  role: string;

  @Column({ nullable: true })
  tipo_persona: string;

  @Column({ nullable: true })
  nacionalidad: string;

  @Column({ nullable: true })
  ocupacion: string;

  @Column({ default: false })
  pep: boolean;

  @Column({ nullable: true })
  u_departamento: string;

  @Column({ nullable: true })
  u_provincia: string;

  @Column({ nullable: true })
  u_distrito: string;

  @Column({ nullable: true })
  u_direccion: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
