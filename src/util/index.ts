import { Type } from "@/types/pokemon"

export function sanitizeName(name: string): string {
  return name.split('-').join(' ')
}

export function getTypes(types: Type[] | undefined):  string[] {
  return types ? types.map((type) => type.type.name) : ['']
}
