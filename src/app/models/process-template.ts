export class ProcessTemplate {
  attributes: {
    'created-at': string;
    description: string;
    'can-construct': boolean;
    name: string;
    'updated-at': string;
    version: number
  };
  id: string;
  links: {
    self: string;
  };
  relationships: {
    workitemlinktypes: {
      links: {
        related: string;
      };
    };
    workitemtypegroups: {
      links: {
        related: string;
      };
    };
  };
  type: 'spacetemplates';
}
