Vim�UnDo� �Yp4r�lZ�rs��p��6��� �n��꺅   /           (                       X�P8    _�                       (    ����                                                                                                                                                                                                                                                                                                                                                             X�P    �         @      Qimport {RestangularService} from "../../service/restangular/restangular.service";5�_�                    0        ����                                                                                                                                                                                                                                                                                                                            0   %       >          V   *    X�P/     �   /   0          &  it('should return programs', inject(   V    [RestangularService, MockBackend], (service: RestangularService, mockBackend) => {       1      mockBackend.connections.subscribe(conn => {   d        conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(MockPrograms) })));   	      });       B      const result = service.getConfig().all('program').getList();       #      result.subscribe(program => {            expect(program).toEqual(             MockPrograms   
        );   	      });     }));5�_�                    /        ����                                                                                                                                                                                                                                                                                                                            0   %       0          V   *    X�P0    �   .   /           5�_�                             ����                                                                                                                                                                                                                                                                                                                            /   %       /          V   *    X�P7    �   
             4import { MockPrograms } from './programs.data.mock';5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             X�P     �              5��