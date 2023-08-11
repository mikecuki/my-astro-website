export interface Menu {
  _uid: string
  link: {
    id: string
    url: string
    linktype: string
    fieldtype: string
    cached_url: string
    story: Link
  }
  component: string
  _editable: string
}

export interface Link {
  id: number
  slug: string
  name: string
  is_folder: boolean
  parent_id: number
  published: boolean
  path: string
  position: number
  uuid: string
  is_startpage: boolean
  real_path: string
}