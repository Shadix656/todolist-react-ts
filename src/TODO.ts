export interface TodoInterface {
    id?: number
    title: string
    task: string
    status: 'En cour' | 'Terminé' | 'Échoué'
}