import { ClinicRepository } from '@/lib/repositories';
import { Clinic } from '@/lib/entities';
import { IClinic } from '@/lib/interfaces';
import { filterProps, CLINIC_FIELDS } from '@/lib/utils';
import { FindOptionsWhere } from 'typeorm';

export class ClinicService {
  private repository: ClinicRepository;

  constructor() {
    this.repository = new ClinicRepository();
  }

  async createClinic(data: IClinic): Promise<Clinic> {
    const dataFilter = filterProps<IClinic>(data, [...CLINIC_FIELDS] as (keyof IClinic)[]);

    if (!dataFilter.cnpj || !dataFilter.nome_fantasia) {
      throw new Error('CNPJ e Nome Fantasia são campos obrigatórios.');
    }
    
    return this.repository.save(dataFilter);
  }

  async getClinics({ queries, id }: { queries?: FindOptionsWhere<Clinic>; id?: number }): Promise<Clinic | Clinic[] | null> {
    if (id) {
      const clinic = await this.repository.findById(id);
      if (!clinic) throw new Error("Clínica não encontrada");
      return clinic;
    }
    if (queries) return this.repository.findByQuery(queries);
    return this.repository.findAll();
  }

  async updateClinic(id: number, data: Partial<IClinic>): Promise<Clinic | null> {
    const dataFilter = filterProps<IClinic>(data, [...CLINIC_FIELDS] as (keyof IClinic)[]);
    return this.repository.update(id, dataFilter);
  }

  async deleteClinic(id: number): Promise<boolean> {
    return this.repository.delete(id);
  }
}